1. Separating concerns.
 - Writing Easy to Maintain Code:
   * parts of the application perform actions on various
   domains(e.g, DB calls, business logic, UI);
 - High Coupling:
   * Low abstraction level limits the size of the application;
   * It`s difficult to change one module without affecting the rest (spaghetti code);
   * Code steps are repeated out of necessity;
   * It`s impractical to reuse a module in another application;
   * The developer must be aware of all the specifics of every module;

2. Goal of Separation of Concerns
 - Limit a unit of code (function, module) to a single domain:
  * E.g., a method that ony visualizes(renders) data on screen;
 - Implementation is abstract from details:
  * E.g., the rendering function does not concern itself with the source of data;
 - The developer doesn't need to know how a module
  operates internally in order to use it;
 - Code reuse is a secondary effect - easier reasoning is primary;

3. Extracting Functionality into Modules
 - Common steps:
  * Extract actions over different domains in their own functions;
  * Identify similar actions across different parts of the application;
  * Increase abstraction of the extracted functions, so that
  they can be used in more places with minimal changes;
  * Move functions from a single domain to a separate module;
 - Don't overdo abstraction!!! A good rule of thumb - increase
  abstraction when you need to refactor the code;

4. Example Isolated Modules.
 - Backend API;
 - Request Logic;
 - Data Manipulation;
 - UI display and control;
 - Utility functions;
