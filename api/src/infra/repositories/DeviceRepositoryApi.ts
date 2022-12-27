import axios from 'axios';
import Device from '../../domain/Device';
import DeviceRepository from '../../domain/DeviceRepository';

export default class extends DeviceRepository {
    private http;

    constructor() {
        super();

        this.http = axios.create({
            baseURL: 'https://dummyjson.com'
        });
    }

    async find() {
        const { data } = await this.http.get('/products');
        
        return data.products.map((device: any) => {
            return new Device(
                device.id,
                device.title,
                device.price,
            );
        });
    }

    async findOne(id: string) {
        const { data: device } = await this.http.get(`/products/${id}`);

        return new Device(
            device.id, 
            device.title,
            device.price,
        );
    }
}