import { Taxios } from '@simplesmiler/taxios';
import axios from 'axios';
import { ToDo } from './ToDo';

const taxios = new Taxios<ToDo>(axios.create({ baseURL: 'http://localhost:8000' }));
export default taxios;
