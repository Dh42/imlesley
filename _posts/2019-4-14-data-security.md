---
layout: post
title:  "Data Security"
author: lesley paone
categories: [ politics, ecommerce ]
image: assets/images/post-4-14/data-security.jpg
featured: true
hidden: true
---

Data security is becoming a hot topic, especially with major breaches happening over the past few years. This matter is really complicated by the US not having any formal data security regulations as well. Essentially consumers are at the mercy of the big corporations, companies that have little to no upside in letting consumers know about breaches. But what can we actually do at this point? Can we secure our personal data? The EU has tried, but their efforts are likely failing if we want to be honest with an evaluation of GDPR.


## What are the UE rules?

 When developing a plan that has a goal, I always love looking at what others have done to evaluate the efficacy of their plans. The European plan is called GDPR, which stands for Global Data Protection Regulation.  GDPR has a scope of the information that it encompasses. In general the information below is what is considered GDPR regulated information:
 
 * Name
 * Address
 * Localization
 * Online Identifier
 * Health Information
 * Income
 * Cultural Profile
 
 These are the bits of information that GDPR really keys into as the important information it was designed to protect. One of the most important aspects of the law is the requirements of what companies must do to collect your data. Here is a brief explanation of what companies must do:
 
 + **Use Plain Language** - This is big part of the bill, users need to plainly understand why your company is collecting data and what you plan on doing with the data. In the US we have dozens of pages in our user terms with all kind of buried or hard to understand information, you practically have to be a lawyer to understand what some sites are doing with your information. This regulation does away with that for the most part. 
 
 + **Consent** - What GDPR wants you to do is get consent from users before you collect any information on them. This is pretty straight forward and is likely the reason you notice more popup footers on sites asking you to accept their terms. 
 
 + **Access and Portability** - This regulation makes it where sites have to give you access to the data they store about you, with the ability to be able to download all of the data that is stored about you. 
 
 + **Notifications** - You are required to notify users of data breaches by a specific time frame. This ties in with the EU's Right to be Forgotten laws.
 
 + **Erase Data** - Your are required to erase user data, when possible, on request from the users. 
 
 + **Profiling Rules** - If you are using data to profile users for binding contracts you must let them know. This includes loans and other types of contractual obligations. 
 
 + **Marketing** - Give people the right to opt marketing that uses their data to target advertising. 
 
 + **Extra Safeguards for Sensitive Data** - Data that is considered to be sensitive like health, race, sexual orientation, religion, and political beliefs require extra safeguards. 
 
 + **Children's Data** - If you collect data from children under the age of 16 you need parental consent. This provision allows each EU state to set their own limit between ages 13-16, so it is country specific. 
 
 + **Data Transfer out of the EU** - You have to make specific legal arrangements when you transfer data out of the EU. Listing who the responsible party is and also their GDPR compliance. 
 
 
The cost of not complying with the EU regulations is pretty stiff as well. Basically you get two strikes before the EU starts sanctions against your company. Once they sanction your company you have to stop collecting data, or they will access a fine between 20 million Euros or 4% of your global turnover. 
 
 
 
## GDPR is destined to fail
 
 
 While the ideas behind GDPR are noble in a sense, they are destined to fail. Simply put they are regulations that are designed by people that do not understand technology, or how the internet works. Some of the provisions in the law are too broad, while others are simply outrageous. 
 
 A good case in point is online identifiers, everyone uses them, but GDPR wants you to ask permission before you log anything. The idea of this fails on so many fronts. Lets break down what a online identifier could be, and why it would fail. A cookie or an IP address would be the easiest forms of online identifiers, but you can expand this to a device profile as well if you really want. 
 
 Why can online identifiers not be part of GDPR? Simply because most sites do not actually control the collection of online identifiers. Those are handled in a layer that most small to medium traffic sites never have access to. A good example is reqular hosting. If you sign up to start a site somewhere like Wix, or maybe Host Gator to host a Wordpress site, those services will collect online identifiers by default. You as a business owner that GDPR applies to actually have no control over this collection. The simplest form of collection is error and access logs on the server. Most all software used on the internet keeps track of how it was accessed, who accessed it, and what was done with it. 
 
 Apache web server powers more servers on the internet than any other software using Apache in a default configuration it logs every transaction, a transaction in this sense means every file that is accessed. So while you are trying your best to be GDPR compliant with your site, the underlying software is making you not GDPR compliant. There is an argument that you can simply turn off this logging, its something I have heard other system admins talk about. Honestly, to me, that is about one of the worst solutions possible. Yes, it will bring you into GDPR compliance, but it opens you up to other issues, bigger issues. Production web servers are meant to run while logging transactions, it is simple as that. Not only does it allow you to diagnose problems on the fly, it allows for greater security as well. 
 
 Server security depends on being able to log these transactions and respond to them. A great example is a banking site, if you enter a password wrong too many times, it might lock the account for a set amount of time. Those protections rely on user identifiers. So do other protections which ban IP addresses after a specific number of failures or when they try to access specific pages on a site. 
 
 There are other user identifiers though, ones that are commonly used in site development. Depending on what browser and platform you are using, a different page could be presented to you. A really well known use of this was a couple years ago it came to light that some sites were using your browsing technology to pick pricing for consumers. Users using specific devices were charged more money than users using other devices. [Read more about that here](https://clark.com/shopping-retail/mac-users-being-fed-pricier-hotel-searches/) 
 
 If you want further proof that you can be tracked without giving up any information, here is a test you can run and see how unique your browser and other settings are, so you can tell how easy it is for a site to track you. [Take the test](https://panopticlick.eff.org/)
 
 Data portability is another huge failing. I am not sure what exactly the EU is trying to accomplish with this part of the legislation, other than you being able to see all the data that is collected on a user, but the law comes for a way to export it in anticipation that you can import it somewhere else. Sorry, I cannot see this happening, no one wants data from another site. 
 
 I could make this article even more boring by listing what is wrong with every clause in the legislation, but lets just say it is a bad framework, with many failings for brevity. 
 
## Elizabeth Warren
 
 Last week I saw another old person with no grasp on technology came out with a proposal of that they want to do. This is dismaying because she is a senator and also a candidate for president as well. Her new bill that she introduced takes enforcement a step further by actually proposing jail time for tech company CEO's. While at the same time her bill does nothing about the data that is being collected. She was quated during her announcement of the new bill "any corporate executive who negligently oversees a giant company causing severe harm to U.S. families". 
 
 Basically the legislation that she is putting forth cannot be enforced. Honestly any legislation around data security in the US is going to be hard to enforce. There are so many variables that a normal person does not understand, they just understand the end result of their data being leaked. How it might affect them, what costs they might have, and how frustrating of a situation it is. 
 
## Where her plan fails
 
 Elizabeth Warren's plan centers around negligence, but how is negligence actually assigned and understood? Sure, there is a standard legal definition for negligence, but how exactly does it apply to situations with so many variables. Complex software systems need their own specific set of regulations and agencies around them. It is unreasonable to judge them by the same standard that you would judge an automobile accident by. 
 
 Here are a couple examples of what the software industry could be up against:
 
#### Scenario 1
 
 Imagine there is a software company that stores a massive amount of user data, say they are a huge social network with millions of lines of code powering their platform and hundreds of thousands of servers across the world. They are a big operation, with a lot of resources, but also a lot of technology behind their platform. Now imagine a security exploit becomes known in one of the underlying server software systems they use. Something like an Apache exploit, which affects every server they operate with user data on it. A company with hundreds of thousands of servers cannot just hit an update button. What if something breaks? So the company starts testing the new bug patches, but in their testing of the new bug patches they end up identifying that the security patches actually introduce new bugs into their platform. NOw they have to make a decision, do they rewrite their platform to sidestep the bugs the patch introduced, do they try to make a custom security patch, or do they wait for the software vendor to release a new bug free patch? At which point in this whole exercise do you assign liability? How much time needs to pass before the company is considered negligent? 
 
#### Scenario 2

 Lets imagine there is a huge search company that powers most of the searches around the world, a good percentage of emails, and other data. This company is a multi-faceted company that is in all kinds of markets from being their own ISP, to self driving car investments, they are in every facet of life. The CEO for this company does not have a strict programming background, his background is more geared towards making good investments and know what technologies people will likely adopt. He however does not know how to bring them to life, so he makes sure his teams in the company are stocked with the individuals that know how to bring these ideas to life. This is actually a description of CEO's in tech companies. What do we do if one of the people he depended on used shortcuts that compromised security around user information? Likely we are in a position where the CEO would never know there was an issue, he under hire might report that everything is fine, he trusts him. Even though in reality the under hire knows that corners were cut and it could expose the company to a breach. This is a situation with negligence, but is the CEO the right person to jail? Sure, everyone answers to the CEO in the company, but if cannot understand code then he cannot check for himself. 
 
 
#### Scenario 3
 
 Lets go further with the second scenario. What if the company used in the previous scenario supplies software to companies like in the first scenario. What if company 2 provided company 1 with faulty software, company 1 used the software and experienced a data breach. Since comapny 1 did everything they were supposed to, it would be virtually impossible to prove negligence, but does that negligence pass through company 1 and land on company 2, who did something negligent? If so, who does it land on in the pass through, the CEO? The head of the unit? The developer that makes $60k a year, who cut the corner? 
 
 
 There are a ton of problems in Elizabeth Warren's bill, which in part is a reason why it will never make it into law. This is also a great reason why we need to stop trying to write bills that use `hot words` and actually write bills or make policy that has a lasting impacting effect. And also a reason why we do not need older non technologically inclined people writing law around technology. 
 
 
## The biggest data security problem


Most people do not even see the biggest data security problem, even though it is sitting right under their nose.  For this section it might be a little technical, but we can get through it. I am going to use [W3Techs](https://w3techs.com/technologies/overview/web_server/all) for the statistics here, so you can view the stats I am using to put this section together. 

If you look at the stats from the link above you can see that webservers mainly utilize two different technologies to serve web pages, they either use Apache or NGNIX. That compromises 85% of every server on the internet. What they have in common is they are open source. Anyone can freely use them, they can freely look at the code that powers them, they can easily propose changes to the code. 

I kind of veered off the point, let me say it, the biggest problem with data security is nation states. Nation states like the US government are responsible for incidences of systems being hacked than any other institution. The reason being is spying. Markets around computers have contracted so much in the last decade, there are only a couple real choices on the market. If you want to serve a web page on a enterprise level you have two choices for processors, you are either using AMD processors or Intel processors. Intel is by far the most popular choice. 

Edward Snowden introduced a new era in realizing how insecure our data is. In his leaks we discovered vulnerabilities in popular software that had been exploited by our government for years. Our government did not want to report the exploits because if they did, the other governments around the world would patch them and it would hurt our ability to spy. So they were never mentioned, in never mentioning them it exposed hundreds of millions of Americas to being spied on as well. 

After the first exploits came out a flood gate opened and dozens of other exploits were found, ones that are highly suspected that ours and other governments had been using for years. How can individuals like you or I protect against this when our government is actively working against our interests? 
 
## The solution

Honestly I am not sure what a good solution is at this time. Something needs to be done, but we need to have common sense laws put together by people that actually understand the industry and understand what we are up against. Not some old person that does not understand tech trying to put something out to appeal to a base. That is exactly what we do not need. 
 
 