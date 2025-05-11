import axios from 'axios';
import { Feature, FetchedFeature } from '../types/Feature';

const baseUrl = "http://localhost:3000/features";

const getAll = async (): Promise<FetchedFeature[] | null> => {
    const {data} = await axios.get<FetchedFeature[]>(baseUrl);
    return data
};

const create = async (feature: Feature) => {
    const response = await axios.post(baseUrl, feature);
    return response.data;
};

const update = async (id: string, feature: Feature)  => {
    const response = await axios.put(`${baseUrl}/${id}`, feature)
    return response.data
};

const remove = async (id: string)  => {
    const response = await axios.delete(`${baseUrl}/${id}`)
    return response.data
};

export default {
    getAll,
    create,
    update,
    remove
};