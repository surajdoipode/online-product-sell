  import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Container,
  TextField,
  Grid,
  CardActions,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddTaskIcon from "@mui/icons-material/AddTask";
import EditIcon from "@mui/icons-material/Edit";

const Dashboard = () => {
  const user = {
    name: "Suraj Doiphode",
    email: "suraj@example.com",
  };

  // Default new task object
  const defaultNewTask = {
    task_name: "",
    due_date: "",
  };

  // States
  const [data, setData] = useState([
    { id: 1, task_name: "Complete React project", due_date: "2025-08-30" },
    { id: 2, task_name: "Study Node.js", due_date: "2025-09-02" },
  ]);
  const [newTasks, setNewTasks] = useState(defaultNewTask);

  // For editing
  const [editTask, setEditTask] = useState(null);

  //  Add Task (fixed)
  const buttonadd = () => {
    if (!newTasks.task_name || !newTasks.due_date) return; // prevent empty
    const id = Date.now(); // unique id
    const taskToAdd = { ...newTasks, id };
    setData((prev) => [...prev, taskToAdd]);
    setNewTasks(defaultNewTask); // reset input
  };

  //  Delete Task
  const handleDeleteTask = (taskId) => {
    setData((prev) => prev.filter((task) => task.id !== taskId));
  };

  //  Open edit modal
  const handleEditTask = (task) => {
    setEditTask(task);
  };

  //  Save edited task
  const handleSaveEdit = () => {
    setData((prev) =>
      prev.map((t) => (t.id === editTask.id ? { ...t, ...editTask } : t))
    );
    setEditTask(null); // Close modal
  };

  return (
    <Box sx={{ p: 4, fontFamily: "Arial" }}>
      {/* User Info */}
      <Typography variant="h4" gutterBottom>
        Welcome, {user.name}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Email: {user.email}
      </Typography>

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
              setNewTasks({ ...newTasks, task_name: e.target.value })
            }
          />
          <TextField
            type="date"
            label="Due Date"
            InputLabelProps={{ shrink: true }}
            variant="outlined"
            value={newTasks.due_date}
            onChange={(e) =>
              setNewTasks({ ...newTasks, due_date: e.target.value })
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
                    color="primary"
                    onClick={() => handleEditTask(task)}
                  >
                    <EditIcon />
                  </IconButton>
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

      {/* Edit Modal */}
      {editTask && (
        <Dialog open={true} onClose={() => setEditTask(null)}>
          <DialogTitle>Edit Task</DialogTitle>
          <DialogContent
            sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}
          >
            <TextField
              fullWidth
              label="Task Name"
              variant="outlined"
              value={editTask.task_name}
              onChange={(e) =>
                setEditTask({ ...editTask, task_name: e.target.value })
              }
            />
            <TextField
              type="date"
              label="Due Date"
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              value={editTask.due_date}
              onChange={(e) =>
                setEditTask({ ...editTask, due_date: e.target.value })
              }
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setEditTask(null)}>Cancel</Button>
            <Button variant="contained" onClick={handleSaveEdit}>
              Save
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Box>
  );
};

export default Dashboard;
