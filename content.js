/* FOR ALL THE CONTENT
This is where all the boxes are made for the page. In each object there is a name of the technology, a short
description, what the user should learn next, and an ordered list of resources related to that technology.
There are a few things to keep in mind when doing editing this list:

	RULES TO FOLLOW WHEN MAKING CHANGES
	====================================
	 - All names MUST be lowercase (even in the $then fields and descriptions)
	 - Descriptions should be NO MORE than 100 characters long
	 - Descriptions should NOT use any complex jargon when possible
	 - Home should be the top domain when possible
	 - Next lessons to follow-up with ($then) are in no particular order in the array
	 - Next lessons should NOT include prerequisites (javascript should not be in angular $then)
	 - Only the FIRST THREE links are shown, in the order of the array
	 - Link names should be the title of the destination
	 - Links should take the user DIRECTLY to the relevant information (i.e. for html go to the html
	 	exercise in codeacademy, rather than codeacademy's home page)

If you have any questions, please don't hesitate to contact me by tweeting @jonhmchan
*/

var CONTENT = [
    {
      name: "html",
      description: "Beginners start here! The very basics of putting something on a webpage",
      $then: ["css", "javascript", "angular", "php"],
      home: "http://developer.mozilla.org/en-US/docs/Web/HTML",
      links: [
        {
          name: "Codeacademy",
          url: "http://www.codecademy.com/courses/web-beginner-en-HZA3b/0/1?curriculum_id=50579fb998b470000202dc8b"
        },
        {
          name: "HTML Dog",
          url: "http://htmldog.com/guides/html/beginner/"
        },
        {
          name: "HTML5 Doctor",
          url: "http://html5doctor.com/"
        },
        {
          name: "Dash",
          url: "https://dash.generalassemb.ly/projects"
        }
      ]
    },
    {
      name: "css",
      description: "Styling your webpage",
      $then: ["javascript", "less", "sass", "bootstrap"],
      home: "http://developer.mozilla.org/en-US/docs/Web/CSS",
      links: [
        {
          name: "Codeacademy",
          url: "http://www.codecademy.com/courses/web-beginner-en-TlhFi/0/1?curriculum_id=50579fb998b470000202dc8b"
        },
        {
          name: "HTML Dog",
          url: "http://htmldog.com/guides/css/beginner/"
        }
      ]
    },
    {
      name: "javascript",
      description: "Make your pages interactive",
      $then: ["python", "jquery", "mongo", "json", "node", "angular", "underscore", "ember", "backbone", "sugar", "coffeescript"],
      home: "http://developer.mozilla.org/en-US/docs/Web/JavaScript",
      links: [
        {
          name: "Codeacademy",
          url: "http://www.codecademy.com/courses/getting-started-v2/0/1?curriculum_id=506324b3a7dffd00020bf661"
        },
        {
          name: "Learn JS",
          url: "http://www.learn-js.org/"
        },
        {
          name: "Learn X in Y Minutes",
          url: "http://learnxinyminutes.com/docs/javascript/"
        }
      ]
    },
    {
      name: "json",
      description: "How all data is sent between applications",
      $then: ["mongo", "http", "jquery"],
      home: "http://www.json.org/",
      links: [
        {
          name: "What is JSON?",
          url: "http://www.copterlabs.com/blog/json-what-it-is-how-it-works-how-to-use-it/"
        }
      ]
    },
    {
      name: "jquery",
      description: "Control the DOM with javascript",
      $then: ["python", "ruby", "node", "angular", "backbone", "ember", "sugar", "coffeescript"],
      home: "http://jquery.com/",
      links: [
      	{
          name: "jQuery in 30 Minutes",
          url: "http://highoncoding.com/Videos/537_Extended_Screencast_on_JQuery_Whole_38_Minutes_.aspx"
        },
        {
          name: "Codeacademy",
          url: "http://www.codecademy.com/courses/web-beginner-en-bay3D/0/1?curriculum_id=50a3fad8c7a770b5fd0007a1"
        }
      ]
    },
    {
      name: "python",
      description: "The best programming language to easily pick up",
      $then: ["flask", "tornado", "mongo", "heroku", "ruby", "node"],
      home: "http://www.python.org/",
      links: [
      	{
      	  name: "Intro to Computer Science",
      	  url: "https://www.udacity.com/course/cs101"
      	},
        {
          name: "Learn Python",
          url: "http://www.learnpython.org/"
        },
        {
          name: "Learn X in Y Minutes",
          url: "http://learnxinyminutes.com/docs/python/"
        }
      ]
    },
    {
      name: "flask",
      description: "A basic microframework for python on the web",
      $then: ["tornado", "mongo", "django", "heroku", "memcached"],
      home: "http://flask.pocoo.org/",
      links: [
        {
          name: "Documentation",
          url: "http://flask.pocoo.org/docs/"
        }
      ]
    },
    {
      name: "django",
      description: "A popular web framework for python",
      $then: ["tornado", "mongo", "flask", "heroku", "memcached"],
      home: "http://www.djangoproject.com",
      links: [
        {
          name: "Want to Learn Django?",
          url: "http://elweb.co/want-to-learn-django-start-here/"
        },
        {
          name: "Documentation",
          url: "https://docs.djangoproject.com/en/1.5/"
        }
      ]
    },
    {
      name: "tornado",
      description: "An asynchronous microframework for python on the web",
      $then: ["flask", "mongo", "heroku", "django", "memcached"],
      home: "http://www.tornadoweb.org/en/stable/",
      links: [
        {
          name: "Documentation",
          url: "http://www.tornadoweb.org/en/stable/documentation.html"
        }
      ]
    },
    {
      name: "ruby",
      description: "An easy, expressive and dynamic scripting language",
      $then: ["rails", "heroku", "python"],
      home: "http://www.ruby-lang.org/en/",
      links: [
        {
          name: "Try Ruby",
          url: "http://tryruby.org/levels/1/challenges/0"
        },
        {
          name: "Learn X in Y Minutes",
          url: "http://learnxinyminutes.com/docs/ruby/"
        },
        {
          name: "Learn Ruby the Hard Way",
          url: "http://ruby.learncodethehardway.org/"
        }
      ]
    },
    {
      name: "rails",
      description: "An awesome web framework for ruby",
      $then: ["heroku", "ruby", "coffeescript", "less", "sass", "sql", "http"],
      home: "http://rubyonrails.org/",
      links: [
        {
          name: "What is Ruby on Rails?",
          url: "http://railsapps.github.io/what-is-ruby-rails.html"
        },
        {
          name: "Recommendations for a Rails Tutorial",
          url: "https://tutorials.railsapps.org/rails-tutorial"
        },
        {
          name: "The Best Way to Learn Rails",
          url: "http://net.tutsplus.com/tutorials/ruby/the-best-way-to-learn-ruby-on-rails/"
        },
        {
          name: "Michael Hartl's Tutorial",
          url: "http://ruby.railstutorial.org/"
        },
        {
          name: "RailsCasts",
          url: "http://railscasts.com/"
        }
      ]
    },
    {
      name: "node",
      description: "Create a backend with javascript",
      $then: ["express", "json", "http", "heroku", "mongo", "ember", "angular"],
      home: "http://nodejs.org/",
      links: [
        {
          name: "How Do I Get Started?",
          url: "http://stackoverflow.com/a/5511507/1043674"
        },
        {
          name: "Node Beginner",
          url: "http://www.nodebeginner.org/"
        },
        {
          name: "Style Guide",
          url: "http://nodeguide.com/style.html"
        },
        {
          name: "nodeschool.io",
          url: "http://nodeschool.io/"
        }
      ]
    },
    {
      name: "express",
      description: "The most popular web framework for node",
      $then: ["heroku", "http", "angular", "ember"],
      home: "http://expressjs.com/",
      links: [
        {
          name: "Guide",
          url: "http://expressjs.com/guide.html"
        }
      ]
    },
    {
      name: "go",
      description : "A new language for the web",
      home: "http://golang.org/",
      $then: ["python", "ruby", "node"],
      links: [
      	{
      		name: "Tour",
      		url: "http://tour.golang.org/#1"
      	}
      ]
    },
    {
      name: "mongo",
      description: "A simple javascript based database",
      $then: ["heroku", "json", "http", "neo4j", "redis", "memcached", "sql"],
      home: "http://www.mongodb.org/",
      links: [
        {
          name: "Try Mongo",
          url: "http://try.mongodb.org/"
        }
      ]
    },
    {
      name: "sql",
      description: "A popular database language",
      $then: ["json", "mongo", "neo4j", "redis", "memcached", "php"],
      home: "http://www.mysql.com/",
      links: [
      	{
      	  name: "Problems and Solutions",
      	  url: "http://www.sql-tutorial.ru/en/book_Intro.html"
      	},
        {
          name: "w3schools",
          url: "http://www.w3schools.com/sql/"
        }
      ]
    },
    {
      name: "neo4j",
      description: "The graph database",
      $then: ["http", "mongo", "redis", "memcached", "sql"],
      home: "http://www.neo4j.org/",
      links: [
        {
          name: "Learn Cypher",
          url: "http://www.neo4j.org/learn/cypher"
        }
      ]
    },
    {
      name: "bootstrap",
      description: "A popular frontend framework",
      $then: ["angular", "ember", "backbone", "sass", "less"],
      home: "http://getbootstrap.com/2.3.2/",
      links: [
        {
          name: "Get Started",
          url: "http://getbootstrap.com/2.3.2/getting-started.html"
        }
      ]
    },
    {
      name: "less",
      description: "A dynamic stylesheet language",
      $then: ["sass", "bootstrap", "angular"],
      home: "http://lesscss.org/",
      links: [
        {
          name: "Try It!",
          url: "http://less2css.org/"
        }
      ]
    },
    {
      name: "sass",
      description: "An extension of css",
      $then: ["less", "bootstrap", "angular"],
      home: "http://sass-lang.com/",
      links: [
        {
          name: "Tutorial",
          url: "http://sass-lang.com/tutorial.html"
        },
        {
          name: "Try",
          url: "http://sass-lang.com/try.html"
        }
      ]
    },
    {
      name: "heroku",
      description: "Easily deploy your applications",
      $then: ["git", "python", "node", "ruby"],
      home: "http://heroku.com/",
      links: [
        {
          name: "Get Started",
          url: "https://devcenter.heroku.com/articles/quickstart"
        }
      ]
    },
    {
      name: "git",
      description: "Version control that's simple to use",
      $then: ["http", "heroku"],
      home: "http://git-scm.com/",
      links: [
        {
          name: "The simple guide",
          url: "http://rogerdudler.github.io/git-guide/"
        },
        {
          name: "Try Git",
          url: "http://try.github.io/levels/1/challenges/1"
        },
        {
          name: "Git Immersion",
          url: "http://gitimmersion.com/"
        }
      ]
    },
    {
      name: "http",
      description: "The basics of making web requests",
      $then: ["python", "node", "heroku", "json"],
      home: "http://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol",
      links: [
        {
          name: "A Beginner's Guide",
          url: "http://net.tutsplus.com/tutorials/other/a-beginners-introduction-to-http-and-rest/"
        },
        {
          name: "First Milliseconds https",
          url: "http://www.moserware.com/2009/06/first-few-milliseconds-of-https.html"
        }
      ]
    },
    {
      name: "redis",
      description: "A basic key-value store",
      $then: ["mongo", "memcached", "heroku", "neo4j", "sql"],
      home: "http://redis.io/",
      links: [
        {
          name: "Try Redis",
          url: "http://try.redis.io/"
        }
      ]
    },
    {
      name: "memcached",
      description: "A way to cache your data in memory",
      $then: ["mongo", "redis", "heroku", "neo4j", "sql"],
      home: "http://memcached.org/",
      links: [
        {
          name: "An Adventure in Learning Memcached",
          url: "https://code.google.com/p/memcached/wiki/TutorialCachingStory"
        }
      ]
    },
    {
      name: "angular",
      description: "Build powerful data-driven html and javascript",
      $then: ["ember", "jquery", "backbone"],
      home: "http://angularjs.org/",
      links: [
        {
          name: "Home",
          url: "http://angularjs.org/"
        },
        { 
          name: "egghead.io - comprehensive AngularJS training videos",
          url: "http://egghead.io/lessons"
        {
          name: "A Better Way to Learn Angular",
          url: "http://www.thinkster.io/pick/GtaQ0oMGIl/"
        }
      ]
    },
    {
      name: "ember",
      description: "Build robust single-page apps with javascript",
      $then: ["angular", "jquery", "backbone"],
      home: "http://emberjs.com/",
      links: [
      ]
    },
    {
      name: "backbone",
      description: "A framework that makes handling data easier in javascript",
      $then: ["angular", "jquery", "ember"],
      home: "http://backbonejs.org/",
      links: [
      ]
    },
    {
      name: "underscore",
      description: "A utility belt for javascript",
      $then: ["sugar", "backbone", "coffeescript"],
      home: "http://underscorejs.org/",
      links: [
        {
          name: "Getting Cozy with Underscore",
          url: "http://net.tutsplus.com/tutorials/javascript-ajax/getting-cozy-with-underscore-js/"
        }
      ]
    },
    {
      name: "sugar",
      description: "Extend the functionality of javascript",
      $then: ["underscore", "backbone", "coffeescript"],
      home: "http://sugarjs.com/",
      links: [
      ]
    },
    {
      name: "coffeescript",
      description: "A language that compiles to javascript",
      $then: ["underscore", "angular", "backbone"],
      home: "http://coffeescript.org/",
      links: [
        {
          name: "Learn X in Y Minutes",
          url: "http://learnxinyminutes.com/docs/coffeescript/"
        }
      ]
    },
    {
      name: "php",
      description: "A server-side language for the web",
      $then: ["python", "node", "sql"],
      home: "http://php.net/",
      links: [
        {
          name: "PHP The Right Way",
          url: "http://www.phptherightway.com"
        },
        {
          name: "Learn X in Y Minutes",
          url: "http://learnxinyminutes.com/docs/php/"
        },
        {
          name: "w3schools",
          url: "http://www.w3schools.com/php/"
        }
      ]
    },
    {
      name: "dart",
      description : "A new language, with tools and libraries, for structured web app engineering",
      $then: ["node"],
      home: "http://dartlang.org",
      links: [
        {
          name: "Programmer’s Guide",
          url: "https://www.dartlang.org/docs/"
        },
        {
          name: "Learn X in Y Minutes",
          url: "http://learnxinyminutes.com/docs/dart/"
        }
      ]
    },
    {
      name: "java",
      description : "A popular programming language",
      home: "",
      $then: ["python", "ruby", "node"],
      links: [
      ]
    },
    {
      name: "xml",
      description : "An alternative to json",
      home: "",
      $then: ["json", "http"],
      links: [
      ]
    }
  ];