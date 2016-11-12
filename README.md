# blog2jekyll
All we're doing here is consuming a service and spitting out Jekyll blog posts.

## Why?
I manage a ***Jeyll*** site for someone who isn't comfortable writing Markdown, and the new Jekyll admin interface leaves a lot to be desired.  ***Drupal*** is my favorite CMS, and it's easy to use for content management.  With this tool I was able to build a Drupal 8 sandbox for the user to write posts to, and those posts would then go to the existing Jekyll site.  No migration, no hassle with Drupal front-end work.  It's dead simple and straight forward.  

## Requirements
Uh, Node and a blog pushing an updating JSON string of posts.  Drupal 8's REST export View for example.  It should work with anything that's pushing along posts.  I've only tested this on a Mac, but I'm sure it'll work anywhere Node does.  There isn't anything other than core modules and modules written here being used. You might run into permissions issues depending on your setup.  I imagine if you're running a ***Jekyll*** site and another blog like ***Wordpress*** or ***Drupal*** you know how to handle your business.

## How much config is needed?
Not too much.  Here's a four step process:
* Set the ***options*** and ***dir*** vars in ***blog2jekyll.js***
* Customize ***post_template.md*** to suit your needs.
* Adjust ***file_name*** and ***content*** (this will need to match what you did to the ***post_template.md***) vars in ***write_post.js*** to suit your needs.
* Add this to a cron job or something to constantly look for changes.

## What about images and stuff
Haven't added that piece yet.  Maybe later.

## What about updating posts
I'm adding that next.

## What about stuff that isn't a blog like a page or something?
This isn't a migration tool per se.  I intend this to simply let someone use a blog they already have to power something like Jekyll.

## Seriously, why?
I really like Jekyll.  I really like how you can host a website for nothing, or practically nothing, using Jekyll.  I really hate managing a Jekyll site and prefer something like Drupal to handle the content management.  Drupal is excellent for that.  I dislike Drupal on the front-end.  If you feel the same way I do then you'll like this.
