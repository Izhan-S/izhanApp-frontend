import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList } from 'react-native';
import SubmitButton from '../components/SubmitButton';

const ToDoScreen = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const deleteTask = () => {
    if (tasks.length > 0) {
      setTasks(tasks.slice(0, -1));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My To-Do List</Text>

      <View style={styles.inputRow}>
        <TextInput
          placeholder="Add a task"
          style={styles.input}
          value={task}
          onChangeText={setTask}
        />
        <View style={styles.buttonContainer}>
          <SubmitButton
            title="+"
            onPress={addTask}
            style={styles.addButton}
          />
          <SubmitButton
            title="-"
            onPress={deleteTask}
            style={styles.deleteButton}
          />
        </View>
      </View>

      {/* 👇 FlatList rendering all tasks below */}
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text style={styles.taskText}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#e8f8f5',
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
    color: '#023020',
  },
  inputRow: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 48,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    textAlignVertical: 'center',
    marginTop: 18,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  addButton: {
    backgroundColor: '#007b83',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 10,
    height: 48,
    justifyContent: 'center',
    marginRight: 8,
  },
  deleteButton: {
    backgroundColor: '#c0392b',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 10,
    height: 48,
    justifyContent: 'center',
  },
  taskItem: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  taskText: {
    fontSize: 16,
    color: '#333',
  },
});

export default ToDoScreen;