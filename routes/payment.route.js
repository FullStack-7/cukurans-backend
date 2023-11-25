const express = require('express');
const { createPayment, getAllPayment, getPaymentById, updatePaymentStatus, deletePaymentById } = require('../controllers/payment.controller');
const route = express.Router();


route.post('/', createPayment);
route.get('/', getAllPayment);
route.get('/:paymentId', getPaymentById);
route.put('/:paymentId', updatePaymentStatus);
route.delete('/:paymentId', deletePaymentById);

module.exports = route;
