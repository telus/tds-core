# Motion principles <sup>beta</sup>

## Purposeful

Motion brings focus to what is important and helps our users accomplish their goals without distraction.

## Realistic

Motion reflects expectations of the physical world we live in while demonstrating spatial and hierarchical relationships between elements.

## Scalable

All motion should work in harmony across our entire design system. Less is more.

## Personality

All motion used should add character and convey the TELUS brand personality. It is expressive and delightful.

## General usage

### Hierarchy

Hierarchical relationships between elements help orient users by showing how elements are related to one another.

#### Parent/child transitions

Parent/child transitions show the hierarchy between the parent element (e.g. an account summary) and child elements (e.g. subscriber details). The transition moves users one level up or down through a particular flow.

#### Peer transitions

Peer transitions show the relationship between sibling elements (e.g. screens of equal hierarchy) that sit at the same level. The transition moves between tabs.

#### Top-level transitions

Top-level transitions show navigational relationships. Destinations are often grouped into major tasks, and the tasks may not relate to one another. The transition moves in place by changing values such as opacity and scale.

#### Dimensional

The Z-index dimension suggests a conceptual hierarchy that uses box shadows to indicate an elevated visual hierarchy. The plane of the screen has an X, Y coordinate system with 0,0 in the top left. However, the Z-index elevation is the imaginary depth pointed at the user.

- X-axis: Objects entering or leaving screen bounds. E.g. global header, progress bar, progress tracker
- Y-axis: Objects indicating progress or loading state. E.g. notifications, cards, tab content
- Z-axis: Objects providing new information. E.g. modals, hover states, drawers, page loaders

### Feedback and status

When appropriate, motion should communicate that an action has been taken and when possible, set expectations of what comes next.

Motion related to feedback and status should be timely and show the element’s pending status. E.g. error/success, loading, sending data, drag & drop reordering.

### Motion Personality

The personality of our motion standards is a reflection of what we stand for, and it's our job to ensure that all of our interactions reflect the following characteristics:

- Helpful - friendly and ready to give help
- Caring - kind and have concern for others
- Reliable - dependable and genuine
- Attentive - thoughtful, mindful and aware
- Responsive - receptive and flexible
- Trustworthy - true, honest and act in good faith

These traits describe how we want our customers to perceive motion on telus.com.

## Anatomy

Whether it’s a persistent, outgoing or incoming element, anatomy motions are used to communicate that a transition has occurred.

### Persistent element

Motion applied to a persistent element (e.g. icons, cross-fading cards, expanding information box) is used in place, both starting and ending on screen.

### Outgoing element

Motion applied to an outgoing element (e.g. content, icon, navigation) exits the screen by fading out at 150 ms - 300 ms.

### Incoming element

An incoming element (e.g. content, icon navigation) enters the screen by fading in at 150 ms - 300 ms.

## Continuity

Continuity plays an important role in design as it helps our users understand the system they’re interacting with. As a UI changes in its appearance, motion provides continuity between the placement and appearance of elements before and after a transition. A fluid transition from one point to another will naturally draw the user’s eyes and guide them through the experience in a more consumable and friendly way.

### Tweening

Tweening is the process of generating intermediate frames between two states of an object. This gives the appearance that the first image has changed smoothly into the second image. Properties that can be tweened:

- Shape
- Opacity
- Position

### Fading

Fading helps create smooth transitions between two states of an object by tweening its opacity.

#### Fade-in

Fade-in is when an object’s opacity transitions from 0% to 100%.

#### Fade-out

Fade-out is when an object’s opacity transitions from 100% to 0%.

#### Cross-fade

Cross-fade is when an object is fading in at the same time and position as another object is fading out.

#### Fade-through

Fade-through is when an object fades out before another object fades in.

## Speed

Transition speeds are the observable speeds in which a UI changes states. With appropriate speeds, UI changes do not complicate or interrupt a user flow. Whenever elements change their states or positions, transitions should be slow enough for users to notice that it is happening, but fast enough so that they are not waiting. The optimal speed for the transitions should be between 100 ms - 500 ms.

### Duration

The shortest duration possible should be used so that the transition is not abrupt or jarring.

#### Duration - simple

Simple components include but are not limited to
selection controls, buttons and alerts/notifications.

Simple transitions require less time to complete than complex transitions and should be between 100 ms - 250 ms.

#### Duration - complex

Complex components include but are not limited to shape changes and icon animations.

Complex transitions require more time to complete than simple transitions and should be between 250 ms - 500 ms.

### Exits and closes

Transitions that close, dismiss or collapse an element allows for quicker feedback. These transitions use shorter durations as less user attention is needed than the user’s next task.
Duration should be between 150 ms - 250 ms and is dependent and relative to the open animation.

### Area

Transitions that take over a smaller area of the screen have shorter durations than those that take over a larger area.

### Easing

Objects in the physical world do not move in a linear fashion when moving from one point to another. For a more realistic motion, objects should ease in and out by accelerating and/or decelerating.

#### Easing-in

Easing-in is used when objects are moving out. The transition starts off slow but ends fast and abruptly.

#### Easing-out

Easing-out is used when objects are moving in. The transition is fast and abrupt at the start and slows down at the end.

## Choreography

The main goal of choreography within motion principles is to organize the sequence of movements and transformations (the two types of animations) taking place within the viewport.

### Sequencing

Within choreography, sequencing helps maintain users’ focus where we want it to be as the screen changes from one state to another.
An animation sequence refers to the order in which different parts of an animation appear, start moving, and stop moving.
A good sequence makes it easy to understand what has changed about a screen, if any elements were added or removed, and what’s important to know about the next interaction.

#### Sequencing - simple

Simple sequences animate all elements in unison, such as an app drawer/menu sliding into the viewport or sliding out of view beyond the viewport.
This does not mean only a single animation can take place, different animations can happen together. For example, fade in/out, movement, change of color can all occur at the same time.
Another element of simple sequencing is to maintain a tight timing-spread and similar animation curve so that the animations seem to end together and appear as one fluid movement.

#### Sequencing - complex

Complex sequences are required when lots of elements or element groups are coming into or going out of the viewport.
To avoid confusion, the elements should be divided into three groups.

- Elements going out: first part of the animation
- Elements coming in or appearing: second part of the animation
- Elements staying within the viewport: can still have transforms/color/content changes

Some elements start moving before others to create a sense of progression and orient the user’s eyes to help them focus on a specific part of the screen (e.g. new CTA content).

The distance an element has to move strongly influences the curve and time to be used. For example, with screens that load content after a skeleton state, the skeleton has to go away and the actual content, which might be larger than the skeleton, has to find its place onto the screen.

### Transformation

We use transformations to switch gracefully between two states of a component or go from one component into several (where the incoming components are not on display within the viewport).
The primary reason to use these transitions is to help the user easily follow changes to individual or a group of components on the screen. Transformations can be split between simple and complex based on the amount of information and movement involved.

#### Transformation - simple

When the transformation is limited to one component or a very small section of the screen and there is very little movement along x- and y-axis, we can categorize it as a simple transformation.
The change from one state to another is animated to reinforce that the same element now serves a different purpose or meaning.

#### Transformation - complex

Complex layout changes use shared transformation to create smooth transitions from one layout to the next. To avoid multiple transformations that overlap and compete for attention, elements are grouped together and transform as a single unit, rather than animating independently.

### Focal element

A transition may include a focal element, which is a persistent element significant to the hierarchy that can be tweened. Like animated containers, focal elements enhance continuity by seamlessly transforming their appearance.
Some transitions place a focal element in the path of other elements. In these cases, avoid using a focal element and apply the default transition, allowing elements to disappear and then reappear.
