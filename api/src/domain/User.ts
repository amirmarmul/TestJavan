export enum Gender {
    Male = 'male',
    Female = 'female',
}

export default class User {
    
    constructor(
        public id: string, 
        public name: string,
        public gender: Gender = Gender.Male,
        public parent?: string|null,
    ) {}
}
