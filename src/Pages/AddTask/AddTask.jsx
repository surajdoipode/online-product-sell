import { useState } from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddTaskIcon from "@mui/icons-material/AddTask";

const AddTask = () => {
  let defaultNewTask = {
    task_name: "",
    due_date: "",
    status: false,
    id: Math.round(Math.random() * 100),
  };

  const [newTasks, setnewTasks] = useState(defaultNewTask);
  const [data, setdata] = useState([
    { task_name: "Food make", due_date: "2025-05-20", status: false, id: 1 },
    { task_name: "Driving bike", due_date: "2025-05-30", status: false, id: 2 },
    { task_name: "Buy Food", due_date: "2025-06-10", status: false, id: 3 },
  ]);

  // Add Task
  const buttonadd = () => {
    if (!newTasks.task_name || !newTasks.due_date) return;
    let id = Math.round(Math.random() * 100);
    const taskToAdd = { ...newTasks, id: id };
    setdata([...data, taskToAdd]);
    setnewTasks(defaultNewTask);
  };

  // Delete Task
  const handleDeleteTask = (taskId) => {
    setdata(data.filter((task) => task.id !== taskId));
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {/* Page Title */}
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", color: "primary.main" }}
      >
        Task Manager
      </Typography>

      {/* Task Input Section */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
          mb: 4,
          p: 2,
          borderRadius: 2,
          bgcolor: "grey.100",
        }}
      >
        <TextField
          fullWidth
          label="Task Name"
          variant="outlined"
          value={newTasks.task_name}
          onChange={(e) =>
            setnewTasks({ ...newTasks, task_name: e.target.value })
          }
        />
        <TextField
          type="date"
          label="Due Date"
          InputLabelProps={{ shrink: true }}
          variant="outlined"
          value={newTasks.due_date}
          onChange={(e) =>
            setnewTasks({ ...newTasks, due_date: e.target.value })
          }
        />
        <Button
          variant="contained"
          color="primary"
          onClick={buttonadd}
          startIcon={<AddTaskIcon />}
        >
          Add
        </Button>
      </Box>

      {/* Task List */}
      <Grid container spacing={3}>
        {data.map((task) => (
          <Grid item xs={12} sm={6} md={4} key={task.id}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: 3,
                transition: "0.3s",
                "&:hover": { boxShadow: 6 },
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {task.task_name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Due: {task.due_date}
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton
                  color="error"
                  onClick={() => handleDeleteTask(task.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default AddTask;
