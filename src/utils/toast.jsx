import { toast } from 'react-toastify';

export const toastSuccess = async (message) => await toast.success(message);

export const toastError = async (message) => await toast.error(message);
