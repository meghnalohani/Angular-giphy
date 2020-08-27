export class Giphy {
    constructor(
        public type: string,
        public id: string,
        public url: string,
        public title: string,
        public images: {
            fixed_height_small: {
                url: string;
            }

        }
        ) {}
}
