module.exports = {
    surge: {
        options: {
            project: "<%= package.paths.build %>",
            domain: "vhs.demo.mxbry.com"
        }
    },
    cacheBust: {
        options: {
            deleteOriginals: true
        },
        files: [{
            src: ["<%= package.paths.build %>**/*.html"]
        }]
    }
};
