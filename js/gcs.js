var gcs = (function (){
    var
    configMap,
    jqueryMap,
    search,
    selected,
    searchClick,
    init;
    
    configMap = {
        url : "https://api.github.com/search/repositories"
    };

    jqueryMap = {
        $container    : null,
        $inputbox     : null,
        $result       : null,
        $sortSelector : null
    };

    search = function(word, lang, success){
        $.ajax({
            type     : "GET",
            url      : configMap.url,
            data     : {q: word},
            dataType : 'json',
            success  : success
        });
    };
    
    selected = function(){
        
    };

    searchClick = function(){
        search(
            jqueryMap.$inputbox.val(),
            "Swift",
            function(json){
                
                console.log(json);
            });
    };
    
    init = function($container){
        jqueryMap.$container = $container;

        jqueryMap.$container.find('.gcs-search')
        .on('click', searchClick);
        jqueryMap.$result = jqueryMap.$container.find('.gcs-result');
        jqueryMap.$inputbox = jqueryMap.$container.find('#gcs-keyword');
        jqueryMap.$sortSelector = jqueryMap.$container.find('#gcs-sort');

    };

    return {init : init};
})();
