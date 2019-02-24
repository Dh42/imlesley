
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/mediumish-theme-jekyll/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/mediumish-theme-jekyll/about",
    "title": "Mediumish Template for Jekyll",
    "body": "  This website is built with Jekyll and Mediumish template for Jekyll. It's for demonstration purposes, no real content can be found. Mediumish template for Jekyll is compatible with Github pages, in fact even this demo is created with Github Pages and hosted with Github.  Features: Built for JekyllCompatible with Github pagesFeatured PostsIndex PaginationSEOFeedSitemapPost SharePost CategoriesPrev/Next LinkCategory Archives (Compatible with Github pages)Jumbotron CategoriesIntegrations:Disqus CommentsGoogle AnalayticsMailchimp IntegrationDesign Features:Bootstrap v4. xFont AwesomeMasonryLayouts:DefaultPostPageArchiveCategories (for 100% compatibility with Github pages)What's Jekyll: If you aren't familiar with Jekyll yet, you should know that it is a static site generator. It will transform your plain text into static websites and blogs. No more databases, slow loading websites, risk of being hacked. . . just your content. And not only that, with Jekyll you get free hosting with GitHub Pages! This page itself is free hosted on Github with the help of Jekyll and Mediumish template that you're currently previewing. If you are a beginner we recommend you start with Jekyll's Docs. Now if you know how to use Jekyll, let's move on to using Mediumish template in Jekyll: How to use  Mediumish  theme: Download or git clone https://github. com/wowthemesnet/mediumish-theme-jekyll. gitcd mediumish-theme-jekyllbundleEdit _config. yml options. If your site is in root: baseurl: ''. Also, change your Google Analytics code, disqus username, authors, Mailchimp list etc. jekyll serve --watchStart by adding your . md files in _posts. Mediumish already has a few examples. YAML front matterfeatured post - featured:trueexclude featured post from  All stories  loop to avoid duplicated posts - hidden:truepost image - image: assets/images/mypic. jpgexternal post image - image:  https://externalwebsite. com/image4. jpg page comments - comments:truemeta description (optional) - description:  this is my meta description YAML Post Example:---layout: posttitle:  We all wait for summer author: johncategories: [ Jekyll, tutorial ]image: assets/images/5. jpgfeatured: true---YAML Page Example---layout: pagetitle: Mediumish Template for Jekyllcomments: true---Questions or bug reports?: Head over to our Github repository!  Buy me a coffeeThank you for your support! Your donation helps me to maintain and improve Mediumish .    $5. 00  $10. 00  $25. 00  $50. 00  $100. 00"
    }, {
    "id": 2,
    "url": "http://localhost:4000/mediumish-theme-jekyll/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "http://localhost:4000/mediumish-theme-jekyll/contact",
    "title": "Get in contact with me",
    "body": ""
    }, {
    "id": 4,
    "url": "http://localhost:4000/mediumish-theme-jekyll/",
    "title": "Home",
    "body": "      Featured:                                                                                                                                                                                 Starting Growing:               If you are familiar with me, you know that I work from an office in my home. I have an awesome commute, but it gets. . . :                                                                                                                                       Lesley Paone                                20 Feb 2018                                                                                                                                All Stories:                         "
    }, {
    "id": 5,
    "url": "http://localhost:4000/mediumish-theme-jekyll/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 6,
    "url": "http://localhost:4000/mediumish-theme-jekyll/growing-things/",
    "title": "Starting Growing",
    "body": "2018/02/20 - If you are familiar with me, you know that I work from an office in my home. I have an awesome commute, but it gets boring looking at the same walls every day. So lately I have started picking up more hobbies. The newest hobby is trying my hand at growing things. I bought some succulents at first, which I have managed to keep alive for several months.  "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});