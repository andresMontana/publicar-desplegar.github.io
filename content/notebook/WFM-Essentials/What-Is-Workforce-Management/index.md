+++
date = '2026-07-19T13:27:20-05:00'
draft = false
title = 'What is Workforce Management?'
series= ["WFM-Essentials-EN"]
series_order = 1
+++

<div style="text-align: justify;">

## WFM in Action 😎

Let's imagine you start a business. An e-commerce business, for example.

At first, everything seems simple. Your main concern is sales: getting customers, selling your products, and growing the business.

Years go by. The business grows, and with it, so do the inquiries about:

* A defective product.
* An order that hasn't arrived.
* A question about the price.
* An account issue.
* A return request.

You can no longer handle them all by yourself. It's impossible. You need to hire people to handle all these interactions.

That's where, as we say back home, the plot thickens. New questions start to appear:

* How many people do I need to hire?
* How many people need to work each day?
* What schedules should they have?
* What happens if many people are absent on the same day?
* Should I offer customer service around the clock?
* What should my operating hours be?

“Good Lord, how stressful!”—you would probably say.

But don't worry: we're the ones who are nervous. This is where Workforce Management, or WFM, comes in.

> WFM combines data, forecasting, planning, scheduling, monitoring, and performance analysis to answer questions like these.

Put simply, we could say that WFM is the area responsible for ensuring:

> The right people, with the right skills, at the right time.

And all of this while trying to balance two objectives that often compete with each other: providing a good customer experience and keeping operating costs under control.

In other words, WFM aims to help an operation use its resources as efficiently as possible.

---

## The WFM Cycle 🌀

This balance is achieved through a framework commonly known as “The WFM Cycle.”

Depending on the organization, the WFM cycle can be divided in different ways. However, one simple way to understand it is:

### 1. Forecasting 📈

How many inquiries do we expect to receive during our planning horizon?

For example:

* How many calls will we receive next month?
* How many chats will we receive next week?
* How many contacts do we expect to receive next Monday between 10:00 and 11:00?

The goal is to estimate the amount of future inquiries. Let's call it volume, to use a more universal term.

At this stage, statistical methods such as ARIMA are often used, for example.

### 2. Capacity Planning 🧮

Alright. We now have an estimate of the expected volume. What now?

With this input, we can answer questions such as:

* How much staff do we need to handle it?
* Do we need to hire?
* Will we be able to make time for feedback and training?
* How many vacation requests do we deny? Why so few?
* A few layoffs, perhaps? Or should we be scared?

Those last two are a joke. We have a reputation for being cruel and heartless, but we know we work with humans and—much to the surprise of my inner child—some virtual machines as well (or virtual agents, to update the terminology and make it sound more human).

### 3. Scheduling 📅

Now we know how many people we need.

The next question is:

* When should they work?
* During which time periods do we need the most working hours?

Once these questions have been answered, work schedules and shifts are designed to cover the expected volume while considering factors such as:

* Employee availability.
* Contracts and working hours.
* Legal requirements in the operating location.
* Days off, vacations, and individual restrictions.
* Special requests.

See? We're not heartless monsters. (Many people in WFM used to be agents too, and you don't usually forget your roots.)

At this stage, tools such as Erlang C, simulation, and optimization engines are commonly used. Even Excel templates can work for simple or stable operations.

### 4. Real Time 📞💬📧

Let's see how many beans make five. The forecasted and planned day has arrived.

But as usually happens, reality doesn't always respect our forecasts. You don't get that much of a good thing.

At this point, we usually ask ourselves questions such as:

* What is happening?
* Is the volume higher than expected?
* Are there more absences than anticipated?
* Do we need to make an operational adjustment?
* Are there breaks or lunches that need to be scheduled?
* Do we panic, or is everything okay with the SLA?
* What coaching should we cancel? Should we increase concurrency?

This is the part of the cycle where we move from planning to action. We need to monitor the main indicators, such as SLA: the percentage of contacts answered within a certain amount of time, for example, 30 seconds.

### 5. Performance Analysis 🚀

The big day is over. It's time to look back and answer questions such as:

* What went well? What went wrong?
* Was our forecast accurate? Do we need to project the volume again?
* Did we have enough capacity?
* Were the schedules properly designed?
* What can we improve for the next cycle?

And then, inevitably, we go back to the beginning. That's why we call it a cycle.

---

## A Practical Example 💪

After analyzing the data from the past year, our forecast indicates that we will receive 20,000 inquiries in our e-commerce business next week.

Data from the last three months indicates that, on average, agents take around 340 seconds to handle each inquiry.

The following simple calculation will give us the minimum number of working hours required to handle the expected volume:

{{< katex >}}

<div class="caja-oscura">
$$
    \begin{split}
         20,000\hspace{3pt} \cancel{inquiries} * \frac{340 \hspace{3pt} \cancel{seconds}} { \cancel{inquiries} } * \frac {1 \hspace{3pt}hour}{3,600 \hspace{3pt}\cancel{seconds}} \\
        \\ 
        = 1,888.89 \hspace{3pt} hours \hspace{3pt} of \hspace{3pt} production
    \end{split} 
$$
</div>

Your ***e-commerce business*** operates in a LATAM country where the legal workweek is 40 hours. Therefore:

<div class="caja-oscura">
$$
    \begin{split}
     \frac{1,888.89 \hspace{3pt} \cancel{hours}}{\dfrac{40 \hspace{3pt} \cancel{hours}}{employees}} = 47.22 \hspace{3pt} employees  \approx 48 \hspace{3pt} employees
    \end{split} 
$$ 
</div>

Assuming, unrealistically, that an employee spends 100% of their contractual time handling contacts, we would need at least 48 employees [^1] to cover the volume for that week.

> In a real operation, the result will be higher.

We will need more hours than those calculated above because, out of those 40 weekly hours, we have to deduct time spent on active breaks, breaks, illness, leave, vacations, meetings, training, and other non-productive activities.

Wow! In just a few lines, we have already used several fundamental WFM concepts: **Volume, AHT, Transactional Hours, FTE, and Shrinkage**.

With this, you're now a full-fledged member of WFM, and you can join the action.

In the next post in this series, **WFM Essentials**, we'll look at some basic WFM definitions.

[^1]: Full-time employees

</div>
