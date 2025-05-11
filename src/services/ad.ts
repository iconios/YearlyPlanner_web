import axios from 'axios';
import { Ad } from '../types/Ad';

const baseUrl = "http://localhost:3000/ad"

const getAll = async (): Promise<Ad | null> => {
    const { data } = await axios.get<Ad | null>(baseUrl);
    return data;
}

export default {
    getAll,
}