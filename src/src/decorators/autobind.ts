//autobind decorator
    export const autoBind = (_: any, _2: string, descriptor: PropertyDescriptor) => {
        const adjDescriptor: PropertyDescriptor = {
            configurable: true,
            get() {
                return descriptor.value.bind(this); 
            }
        }
        return adjDescriptor;
    }
