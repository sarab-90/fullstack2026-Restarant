import {createUser} from '../models/authModel.js';
import {findUserByEmail} from '../models/userModel.js';
import bcrypt from 'bcrypt';

export const register = async (req, res) => {
    const {username, email, password} = req.validateData;
    try {
        const existedUser = await findUserByEmail(email);
        if (existedUser) {
            return res.status(400).json({message: 'Email already exists'});
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await createUser(username, email, hashedPassword, "user");
        if (!newUser) {
            return res.status(400).json({message: 'Failed to create user'});
        }
        return res.status(201).json({message: 'User registered successfully', user: newUser});
    } catch (error) {
        return res.status(500).json({message: 'interal server error , in register'});
    }
}
// login logic
export const login = async (req, res) => {
    const {email, password} = req.validateData;
    try {
        const user = await findUserByEmail(email);
        // check if user exists
        if (!user) {
            return res.status(400).json({message: 'Invalid email or password'});
        }
        // compare password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        // if password is not valid
        if (!isPasswordValid) {
            return res.status(400).json({message: 'Invalid email or password'});
        }
        return res.status(200).json({message: 'Login successful', user});
        
    } catch (error) {
        return res.status(500).json({message: 'interal server error , in login'});
    }
}