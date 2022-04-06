const Task = require('../models/Task');

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({
            status: 'success',
            data: task,
        });
    } catch (error) {
        res.status(500).json({
            status: 'failed',
            message: error.message,
        });
    }
};

const getAllTasks = async (req, res) => {
    try {
        const task = await Task.find({});
        res.status(200).json({
            status: 'success',
            data: task,
        });
    } catch (error) {
        res.status(500).json({
            status: 'failed',
            message: error.message,
        });
    }
};

const getTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findById({ _id: id });

        if (!task) {
            return res.status(404).json({
                status: 'failed',
                message: `No task with id ${id}`,
            });
        }

        res.status(200).json({
            status: 'success',
            data: task,
        });
    } catch (error) {
        res.status(500).json({
            status: 'failed',
            message: error.message,
        });
    }
};

const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndUpdate({ _id: id }, req.body, {
            new: true,
            runValidators: true,
        });

        if (!task) {
            return res.status(404).json({
                status: 'failed',
                message: `No task with id ${id}`,
            });
        }

        res.status(200).json({
            status: 'success',
            data: task,
        });
    } catch (error) {
        res.status(500).json({
            status: 'failed',
            message: error.message,
        });
    }
};

const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndDelete({ _id: id });

        if (!task) {
            return res.status(404).json({
                status: 'failed',
                message: `No task with id ${id}`,
            });
        }

        res.status(200).json({
            status: 'success',
            task: null,
        });
    } catch (error) {
        res.status(500).json({
            status: 'failed',
            message: error.message,
        });
    }
};

module.exports = { createTask, getAllTasks, getTask, updateTask, deleteTask };
