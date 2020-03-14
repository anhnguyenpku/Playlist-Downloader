(function (w, d, $) {

    /**
     * Download text as file.ext
     * @param {string} filename File name
     * @param {string} text file content
     */
    function download(filename, text) {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);
        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();
        document.body.removeChild(element);
    }

    /**
     * Download playlist from NhacCuaTui page
     * Ps: So sorry when i don't spend my time on your adverts.
     */
    function fun4MyMom() {
        var AJAX = [];
        var playListArr = Array.from(downloadPlaylist.listDownload);

        playListArr.forEach(function (x) {
            var url = "https://www.nhaccuatui.com/download/song/" + x.key + "_128";
            AJAX.push($.getJSON(url));
        });

        $.when.apply($, AJAX).done(function (data) {
            var urls = "";
            for (var i = 0, len = arguments.length; i < len; i++) {
                urls += arguments[i][0].data.stream_url + "\n"
            }

            if (urls) {
                download('fileList.txt', urls)
                console.info('Finish!')
            }
        });

        console.info('Processing...')
    };

    fun4MyMom();
})(window, document, $ || jQuery);
