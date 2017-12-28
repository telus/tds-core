<strong>Moving forward, TDS will be replacing most Foundational Element styles with React components.</strong>

Past versions of TDS have distributed a large collection of styling, similar to the approach of libraries such as 
Bootstrap or Semantic UI. TDS not only exposed CSS classes that could be applied to many HTML elements, such as 
buttons (`.button--primary`) or typography (`.text--medium`), but also styled core HTML elements directly, such a `<h1>-<h6>`
and `<a>`. 

Large amounts of CSS in the global namespace is very difficult to maintain at scale. Naming conventions such as BEM alleviate 
some of that pain, but do not eliminate it. In addition, CSS classes only provide look-and-feel, while leaving out other
concerns such as accessibility and interactive behaviors. Finally, CSS classes are tough to evolve, often requiring breaking 
changes.

TELUS digital is aligned on React as the target for creating UIs. Because React makes components a first-class citizen, 
the stylesheet-first approach of TDS makes less sense. We can provide a richer TDS experience by embracing React completely.
