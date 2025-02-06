class Video {
    constructor(title, description, url, uploader) {
        this.title = title;
        this.description = description;
        this.url = url;
        this.uploader = uploader;
        this.createdAt = new Date();
    }

    // Method to get video details
    getDetails() {
        return {
            title: this.title,
            description: this.description,
            url: this.url,
            uploader: this.uploader,
            createdAt: this.createdAt,
        };
    }
}

module.exports = Video;