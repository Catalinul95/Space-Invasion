class ImageLoader {
    constructor(files, path) {
        this.files = files;
        this.path = path;
        this.loadedFiles = {};
        this.filesNum = files.length;
        this.filesLoaded = 0;
        this.completed = false;
        this.startLoading();
    }
    startLoading() {
        const that = this;
        for (let i = 0; i < this.filesNum; i++) {
            let fileName = this.files[i];
            const image = new Image();
            image.addEventListener('load', incrementLoadedFiles);
            image.src = this.path + this.files[i];
            this.loadedFiles[fileName] = image;
        }

        function incrementLoadedFiles() {
            if (that.filesLoaded == that.filesNum - 1) {
                that.completed = true;
            } else {
                that.filesLoaded += 1;
            }
        }
    }
    isCompleted() {
        return this.completed;
    }
    getImage(name) {
        return this.loadedFiles[name];
    }
}