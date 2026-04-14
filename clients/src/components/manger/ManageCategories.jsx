import {
  Button,
  Card,
  CardContent,
  Container,
  Stack,
  Typography,
  TextField,
  Box,
  Collapse,
} from "@mui/material";
import { useCategories } from "../../../Hooks/useCategories.js";
import Header from "../Shared/Header.jsx";
import { useState } from "react";
import toast from "react-hot-toast";

function ManageCategories() {
  const { categories, addNewCategory, deleteCategory } = useCategories();
  
  const [newCategory, setNewCategory] = useState({
    name: "",
    description: "",
  });

  const [showForm, setShowForm] = useState(false); 

  const handleChange = (e) => {
    setNewCategory({ ...newCategory, [e.target.name]: e.target.value });
  };

  const AddCategory = async () => {
    if (!newCategory.name.trim()) {
      return toast.error("Category name is required!");
    }
    await addNewCategory({
      categoryname: newCategory.name,
      description: newCategory.description,
    });
    setNewCategory({ name: "", description: "" });
    setShowForm(false);
  };

  const handleDelete = async (id) => {
    await deleteCategory(id);
  };

  return (
    <>
      <Header />
      <Typography variant="h4" align="center" mt={5} fontWeight="bold">
        Manage Categories
      </Typography>

      <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
        <Stack spacing={2}>
          <Button
            variant={showForm ? "outlined" : "contained"}
            color={showForm ? "secondary" : "primary"}
            onClick={() => setShowForm(!showForm)}
            fullWidth
          >
            {showForm ? "Close Form" : "Add New Category"}
          </Button>
          <Collapse in={showForm}>
            <Box 
              sx={{ 
                p: 3, 
                border: '1px solid #e0e0e0', 
                borderRadius: 2, 
                bgcolor: '#fafafa',
                mt: 1 
              }}
            >
              <Stack spacing={2} component="form">
                <TextField
                  label="Category Name"
                  name="name"
                  variant="outlined"
                  value={newCategory.name}
                  onChange={handleChange}
                  fullWidth
                />
                <TextField
                  label="Description"
                  name="description"
                  variant="outlined"
                  value={newCategory.description}
                  onChange={handleChange}
                  fullWidth
                  multiline
                  rows={2}
                />
                <Button
                  variant="contained"
                  color="success"
                  size="large"
                  onClick={AddCategory}
                  fullWidth
                >
                  Save Category
                </Button>
              </Stack>
            </Box>
          </Collapse>
        </Stack>
      </Container>

      <hr style={{ opacity: 0.2, margin: "20px 0" }} />

      <Container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          justifyContent: "center",
          mt: 5,
          pb: 5,
        }}
      >
        {categories && categories.length > 0 ? (
          categories.map((category) => (
            <Card
              key={category._id || category.id}
              sx={{ minWidth: 300, maxWidth: 350, boxShadow: 3 }}
            >
              <CardContent>
                <Typography variant="h5" color="primary" gutterBottom>
                  {category.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ minHeight: "40px" }}
                >
                  {category.description || "No description provided."}
                </Typography>

                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent="flex-end"
                  mt={3}
                >
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => handleDelete(category._id || category.id)}
                  >
                    Delete
                  </Button>
                  <Button variant="contained" color="info" disableElevation>
                    Edit
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography color="text.secondary">
            No categories available.
          </Typography>
        )}
      </Container>
    </>
  );
}
export default ManageCategories;