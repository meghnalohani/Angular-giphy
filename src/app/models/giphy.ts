export class Giphy {
    constructor(
        public type: string,
        // public title?: string,
        // public imgHeight?: string,
        // public imgWidth?: string,
        public url: string,
        public title: string,
        public images: {
            original: {
                url: string;
            }

        }
        ) {}
}
