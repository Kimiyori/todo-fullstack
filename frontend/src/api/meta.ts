import { Taxios } from '@simplesmiler/taxios';
import axios from 'axios';
import { ToDo } from './ToDo';

const taxios = new Taxios<ToDo>(axios.create({ baseURL: process.env.REACT_APP_BACKEND_URL }));
export default taxios;
