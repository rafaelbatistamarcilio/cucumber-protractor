class Config {
    static getDsvUrl() { return 'http://localhost:8080/index.html' }

    static getHost(){  
        if(true){
            return Config.getDsvUrl();
        }
    }
}

module.exports = Config