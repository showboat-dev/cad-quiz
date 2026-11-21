// 由 scripts/build_data.py 自动生成
window.BANKS = [
 {
  "id": "excel",
  "name": "CAD 题库 122",
  "source": "Excel",
  "questions": [
   {
    "id": "x1",
    "q": "Here is the Business Rule script template: (function executeRule (current, previous */null when async*/){ }) (current, previous); This type of JavaScript function is known as:",
    "options": [
     {
      "k": "A",
      "t": "Scoped"
     },
     {
      "k": "B",
      "t": "Anonymous"
     },
     {
      "k": "C",
      "t": "Self-invoking"
     },
     {
      "k": "D",
      "t": "Constructor"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x2",
    "q": "Which method call in client side returns true only if the currently logged in user has the catalog_admin role and in no other case?",
    "options": [
     {
      "k": "A",
      "t": "g_user.hasRole(‘catalog_admin’)"
     },
     {
      "k": "B",
      "t": "g_user.hasRoleOnly(‘catalog_admin’)"
     },
     {
      "k": "C",
      "t": "g_user.hasRoleExactly(‘catalog_admin’)"
     },
     {
      "k": "D",
      "t": "g_user.hasRoleFromList(‘catalog_admin’)"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x3",
    "q": "How many applications menus can an application have?",
    "options": [
     {
      "k": "A",
      "t": "As many as the application design requires"
     },
     {
      "k": "B",
      "t": "2, one for an application’s user modules and one for an application’s administrator modules"
     },
     {
      "k": "C",
      "t": "3, one for an application’s user modules, one for an application’s administrator modules, and one for the ServiceNow administrator’s modules"
     },
     {
      "k": "D",
      "t": "1, which is used for all application modules"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x4",
    "q": "Which of the following are configured in an Email Notification?",
    "options": [
     {
      "k": "A",
      "t": "When to send the notification"
     },
     {
      "k": "B",
      "t": "What content will be in the notification"
     },
     {
      "k": "C",
      "t": "How to send the notification"
     },
     {
      "k": "D",
      "t": "Who will receive the notification"
     }
    ],
    "answer": [
     "A",
     "B",
     "D"
    ],
    "multi": true,
    "notes": "",
    "ref": []
   },
   {
    "id": "x5",
    "q": "What is the maximum number of test cases that can be added to a suite in ATF ?",
    "options": [
     {
      "k": "A",
      "t": "The limit depends on the ServiceNow instance version"
     },
     {
      "k": "B",
      "t": "The limit depends on the type of application - whether it is in global scope or custom scope and ServiceNow instance version"
     },
     {
      "k": "C",
      "t": "There is no such limit. You can have one suite with many test cases."
     },
     {
      "k": "D",
      "t": "The limit depends on the ServiceNow instance version"
     },
     {
      "k": "E",
      "t": "The limit depends on the type of application - whether it is in global scope or custom scope"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x6",
    "q": "Which one of the following is true for a Script Include with a Protection Policy value of Protected?",
    "options": [
     {
      "k": "A",
      "t": "The Protection Policy is applied only if the application is downloaded from the ServiceNow App Store"
     },
     {
      "k": "B",
      "t": "The Protection policy option can only be enabled by a user with the admin role"
     },
     {
      "k": "C",
      "t": "Any user with the protected_edit role can see and edit the Script Include"
     },
     {
      "k": "D",
      "t": "The Protection Policy is applied only if the glide.app.apply_protection system property value is true"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "None: Allows anyone to read and edit this downloaded or installed script include.\nRead-only: Allows anyone to read values from this downloaded or installed script include. No one can change script values on the instance on which they download or install it.\nProtected: Provides intellectual property protection for application developers. Customers who download the script include cannot see the contents of the script field. The script is encrypted in memory to prevent unauthorized users from seeing it in plain text.",
    "ref": []
   },
   {
    "id": "x7",
    "q": "Which one of the following client-side scripts apply to Record Producers?",
    "options": [
     {
      "k": "A",
      "t": "UI Scripts and UI Actions"
     },
     {
      "k": "B",
      "t": "Client Scripts and UI Policies"
     },
     {
      "k": "C",
      "t": "UI Scripts and Record Producer Scripts"
     },
     {
      "k": "D",
      "t": "Catalog Client Scripts and Catalog UI Policies"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x8",
    "q": "Which one of the following is true for a table with the \"Allow configuration\" Application Access option selected?",
    "options": [
     {
      "k": "A",
      "t": "Any user with the application’s user role can modify the application’s scripts"
     },
     {
      "k": "B",
      "t": "Only the in scope application’s scripts can create Business Rules for the table"
     },
     {
      "k": "C",
      "t": "Out of scope applications can create Business Rules for the table"
     },
     {
      "k": "D",
      "t": "Out of scope applications can add new tables to the scoped application"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x9",
    "q": "What are some of the considerations to document as part of the business process?",
    "options": [
     {
      "k": "A",
      "t": "Business problem, data input/output, project schedule, and process steps"
     },
     {
      "k": "B",
      "t": "Business problem, data input/output, users/stakeholders, and process steps"
     },
     {
      "k": "C",
      "t": "Business problem, data input/output, users/stakeholders, and database capacity"
     },
     {
      "k": "D",
      "t": "Business problem, users/stakeholders, available licenses, and database capacity"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "#NAME?\n#NAME?\n-Users/stakeholders are “Who can trigger the process?”, “Who is approving it?”, “Who are the implementers?”, etc.\n-Process stepts can be anything. Usually it has approval, implementation, test. But it could also be “create a virtual machine on citrix”.",
    "ref": []
   },
   {
    "id": "x10",
    "q": "Which Application Access configuration field(s) are NOT available if the Can read configuration field is NOT selected?",
    "options": [
     {
      "k": "A",
      "t": "Allow configuration"
     },
     {
      "k": "B",
      "t": "Can read does not affect the availability of other Application Access fields"
     },
     {
      "k": "C",
      "t": "Can create, Can update, and Can delete"
     },
     {
      "k": "D",
      "t": "All access to this table via web services"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x11",
    "q": "When creating a Utilities Script Include. Identify the step that does not belong.",
    "options": [
     {
      "k": "A",
      "t": "Script the function(s)"
     },
     {
      "k": "B",
      "t": "Create a prototype object from the new class"
     },
     {
      "k": "C",
      "t": "Identify the table"
     },
     {
      "k": "D",
      "t": "Create a class"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x12",
    "q": "Which of the following statements does NOT apply when extending an existing table?",
    "options": [
     {
      "k": "A",
      "t": "You must script and configure all required behaviors"
     },
     {
      "k": "B",
      "t": "The new table inherits all of the fields from the parent table"
     },
     {
      "k": "C",
      "t": "The new table inherits the functionality built into the parent table"
     },
     {
      "k": "D",
      "t": "The parent table’s Access Controls are evaluated when determining access to the new table’s records and fields"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "Extending an existing ServiceNow table means the table you create will inherit the parent table’s columns as well as the table’s business logic.",
    "ref": []
   },
   {
    "id": "x13",
    "q": "The source control operation used to store local changes on an instance for later application is called a(n).",
    "options": [
     {
      "k": "A",
      "t": "Branch"
     },
     {
      "k": "B",
      "t": "Tag"
     },
     {
      "k": "C",
      "t": "Stash"
     },
     {
      "k": "D",
      "t": "Update set"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x14",
    "q": "When configuring an Access Control rule which has no condition or script, which one of the following statements is NOT true?",
    "options": [
     {
      "k": "A",
      "t": "table.id will grant access to a specific record on the table"
     },
     {
      "k": "B",
      "t": "table.field will grant access to a specific field in a record"
     },
     {
      "k": "C",
      "t": "table.*will grant access to every field in a record"
     },
     {
      "k": "D",
      "t": "table.None will grant access to every record on the table"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x15",
    "q": "Which one of the following is a list of Link types?",
    "options": [
     {
      "k": "A",
      "t": "Assessment, List of Records, Separator, Timeline Page"
     },
     {
      "k": "B",
      "t": "List of Records, Content Page, Order, URL (from arguments)"
     },
     {
      "k": "C",
      "t": "List of Records, Separator, Catalog Type, Roles"
     },
     {
      "k": "D",
      "t": "Assessment, List of Records, Content Page, Roles"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x16",
    "q": "What syntax is used in a Record Producer script to access values from Record Producer form fields?",
    "options": [
     {
      "k": "A",
      "t": "current.variable_name"
     },
     {
      "k": "B",
      "t": "current.field_name"
     },
     {
      "k": "C",
      "t": "producer.variablename"
     },
     {
      "k": "D",
      "t": "producer.field_name"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "For record producers it should be producer.variablename. For catalog items it will be current.variablename.",
    "ref": []
   },
   {
    "id": "x17",
    "q": "Which of the following features are available to Global applications?",
    "options": [
     {
      "k": "A",
      "t": "Flow Designer"
     },
     {
      "k": "B",
      "t": "Automated Test Framework"
     },
     {
      "k": "C",
      "t": "Source Control"
     },
     {
      "k": "D",
      "t": "Delegated Development"
     }
    ],
    "answer": [
     "A",
     "B",
     "C"
    ],
    "multi": true,
    "notes": "",
    "ref": []
   },
   {
    "id": "x18",
    "q": "Which one of the following returns true if the currently logged in user has the admin role in a server side script?",
    "options": [
     {
      "k": "A",
      "t": "g_form.hasRole(‘admin’)"
     },
     {
      "k": "B",
      "t": "gs.hasRole(‘admin’)"
     },
     {
      "k": "C",
      "t": "g_form.hasRoleExactly(‘admin’)"
     },
     {
      "k": "D",
      "t": "gs.hasRoleExactly(‘admin’)"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "https://developer.servicenow.com/dev.do#!/reference/api/rome/server/no-namespace/c_GlideSystemScopedAPI#r_ScopedGlideSystemHasRole_Object",
    "ref": []
   },
   {
    "id": "x19",
    "q": "Which one of the following is NOT required to link a ServiceNow application to a Git repository?",
    "options": [
     {
      "k": "A",
      "t": "URL"
     },
     {
      "k": "B",
      "t": "Username"
     },
     {
      "k": "C",
      "t": "Password"
     },
     {
      "k": "D",
      "t": "Application name"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x20",
    "q": "Application developers configure ServiceNow using industry standard JavaScript to…",
    "options": [
     {
      "k": "A",
      "t": "Extend and add functionality"
     },
     {
      "k": "B",
      "t": "Enable the right-click to edit the context menus on applications in the navigator"
     },
     {
      "k": "C",
      "t": "Configure the outgoing email display name"
     },
     {
      "k": "D",
      "t": "Customize the organization’s company logo and banner text"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x21",
    "q": "One of the uses of the ServiceNow REST API Explorer is:",
    "options": [
     {
      "k": "A",
      "t": "Practice using REST to interact with public data providers"
     },
     {
      "k": "B",
      "t": "Convert SOAP Message functions to REST methods"
     },
     {
      "k": "C",
      "t": "Create sample code for sending REST requests to ServiceNow"
     },
     {
      "k": "D",
      "t": "Find resources on the web for learning about REST"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x22",
    "q": "Which of the following are true for reports in ServiceNow? (3 options)",
    "options": [
     {
      "k": "A",
      "t": "Any user can see any report shared with them"
     },
     {
      "k": "B",
      "t": "All users can generate reports on any table."
     },
     {
      "k": "C",
      "t": "Can be scheduled to be run and distributed by email."
     },
     {
      "k": "D",
      "t": "Can be a graphical representation of data."
     },
     {
      "k": "E",
      "t": "Can be run on demand by authorized users."
     }
    ],
    "answer": [
     "C",
     "D",
     "E"
    ],
    "multi": true,
    "notes": "",
    "ref": []
   },
   {
    "id": "x23",
    "q": "In what order are ServiceNow Access Controls evaluated?",
    "options": [
     {
      "k": "A",
      "t": "field, table"
     },
     {
      "k": "B",
      "t": "table, field"
     },
     {
      "k": "C",
      "t": "table, record"
     },
     {
      "k": "D",
      "t": "record, field"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "The ACL is executed in the below order:\nThe condition must evaluate to true.\nThe script must evaluate to true or return an answer variable with the value of true.\nThe user must have one of the roles in the required roles list. If the list is empty, this condition evaluates to true.\n[Record ACL rules only] The matching table-level and then field-level ACL rules must evaluate to true.",
    "ref": []
   },
   {
    "id": "x24",
    "q": "When working in the Form Designer, configuring the label of a field in a child table changes the label on which table(s)?",
    "options": [
     {
      "k": "A",
      "t": "child table"
     },
     {
      "k": "B",
      "t": "base table"
     },
     {
      "k": "C",
      "t": "parent table"
     },
     {
      "k": "D",
      "t": "all tables"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "The label will be changed at the nearest base table level.\nFor example:\nParent: u_table_a\nChild: u_table_ab\nChild: u_table_abd\ninsert Label: 'my label'\nChild: u_table_abdc\nChild: u_table_abdce\nChild: u_table_etc\nModify: 'my label'\nChild: u_table_c\nIn this case, modifying \"my label' at u_table_etc is actually modifying the label at u_table_abd; which is the nearest base table of that dictionary.",
    "ref": []
   },
   {
    "id": "x25",
    "q": "Which Report Type(s) can be created by right-clicking on a column header in a table’s list?",
    "options": [
     {
      "k": "A",
      "t": "Bar Chart"
     },
     {
      "k": "B",
      "t": "Bar Chart and Pie Chart"
     },
     {
      "k": "C",
      "t": "Bar Chart, Pie Chart, and Histogram"
     },
     {
      "k": "D",
      "t": "Bar Chart, Pie Chart, Histogram, and Line"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x26",
    "q": "When configuring a REST Message, the Endpoint is:",
    "options": [
     {
      "k": "A",
      "t": "The commands to the REST script to stop execution"
     },
     {
      "k": "B",
      "t": "The URI of the data to be accessed, queried, or modified"
     },
     {
      "k": "C",
      "t": "The response from the provider indicating there is no data to send back"
     },
     {
      "k": "D",
      "t": "Information about the format of the returned data"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x27",
    "q": "Which objects can be used in Inbound Action scripts?",
    "options": [
     {
      "k": "A",
      "t": "current"
     },
     {
      "k": "B",
      "t": "email"
     },
     {
      "k": "C",
      "t": "producer"
     },
     {
      "k": "D",
      "t": "event"
     },
     {
      "k": "E",
      "t": "previous"
     }
    ],
    "answer": [
     "A",
     "B",
     "D"
    ],
    "multi": true,
    "notes": "",
    "ref": []
   },
   {
    "id": "x28",
    "q": "Which of the following is NOT supported by Flow Designer?",
    "options": [
     {
      "k": "A",
      "t": "Test a flow with rollback"
     },
     {
      "k": "B",
      "t": "Run a flow from a MetricBase Trigger"
     },
     {
      "k": "C",
      "t": "Use Delegated Developer"
     },
     {
      "k": "D",
      "t": "Call a subflow from a flow"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x29",
    "q": "How should Application Access be configured to prevent all other private application scopes from creating configuration records on an application’s data tables?",
    "options": [
     {
      "k": "A",
      "t": "Set the Accessible from field value to This application scope only and de-select the Allow access to this table via web services option"
     },
     {
      "k": "B",
      "t": "Set the Accessible from field value to This application scope only"
     },
     {
      "k": "C",
      "t": "Set the Accessible from field value to All application scopes and de-select the Can create option"
     },
     {
      "k": "D",
      "t": "You must create Access Controls to prevent all other application scopes from creating configuration records on an application’s data tables rather than using Application Access"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x30",
    "q": "What are some of the benefits of extending an existing table such as the Task table when creating a new application?",
    "options": [
     {
      "k": "A",
      "t": "Existing logic from the parent table will be automatically applied to the new table."
     },
     {
      "k": "B",
      "t": "You can repurpose existing fields by simply changing the label"
     },
     {
      "k": "C",
      "t": "All of the parent table records are copied to the new table."
     },
     {
      "k": "D",
      "t": "Use existing fields with no modifications"
     }
    ],
    "answer": [
     "A",
     "B",
     "D"
    ],
    "multi": true,
    "notes": "Extending an existing ServiceNow table means the table you create will inherit the parent table’s columns as well as the table’s business logic.",
    "ref": []
   },
   {
    "id": "x31",
    "q": "Which one of the following is the baseline behavior of a table in a privately-scoped application?",
    "options": [
     {
      "k": "A",
      "t": "Any Business Rule can read, write, delete, and update from the table"
     },
     {
      "k": "B",
      "t": "Only artifacts in the table’s application can read from the table"
     },
     {
      "k": "C",
      "t": "All application scopes can read from the table"
     },
     {
      "k": "D",
      "t": "The table and its data are not accessible using web services"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "When you create new or extend the table in private scope, table is accessible from All Application Scopes with following Application Access option checked:\n– Can Read",
    "ref": []
   },
   {
    "id": "x32",
    "q": "When configuring a module, what does the Override application menu roles configuration option do?",
    "options": [
     {
      "k": "A",
      "t": "Admin is given access to the module even if Access Controls would ordinarily prevent access"
     },
     {
      "k": "B",
      "t": "Users with access to the application menu can see the module even if they don’t have the module role"
     },
     {
      "k": "C",
      "t": "Self-Service users can access the module even though they do not have roles"
     },
     {
      "k": "D",
      "t": "Users with the module role but without access to the application menu access the module"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x33",
    "q": "Which one of the following is true for GlideUser (g_user) methods?",
    "options": [
     {
      "k": "A",
      "t": "Can be used in Business Rules, and Scripts Includes"
     },
     {
      "k": "B",
      "t": "Can be used in Client Scripts, UI Policies, and UI Actions"
     },
     {
      "k": "C",
      "t": "Can be used in Client Scripts and UI Policies only"
     },
     {
      "k": "D",
      "t": "Can be used in Business Rules only"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x34",
    "q": "From the list below, identify one reason an application might NOT be a good fit with ServiceNow.",
    "options": [
     {
      "k": "A",
      "t": "Needs workflow to manage processes"
     },
     {
      "k": "B",
      "t": "Uses forms extensively to interact with data"
     },
     {
      "k": "C",
      "t": "Requires reporting capabilities"
     },
     {
      "k": "D",
      "t": "Requires \"as-is\" use of low-level programming libraries"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x35",
    "q": "Which of the following writes a message to the system log but NOT to the syslog table unless debug has been activated?",
    "options": [
     {
      "k": "A",
      "t": "gs.log(\"Hello World\");"
     },
     {
      "k": "B",
      "t": "gs.print(\"Hello World\");"
     },
     {
      "k": "C",
      "t": "gs.info(\"Hello World\");"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x36",
    "q": "Which of the following methods prints a message on a blue background to the top of the current form by default?",
    "options": [
     {
      "k": "A",
      "t": "g_form.addInfoMessage()"
     },
     {
      "k": "B",
      "t": "g_form.showFieldMsg()"
     },
     {
      "k": "C",
      "t": "g_form.addInfoMsg()"
     },
     {
      "k": "D",
      "t": "g_form.showFieldMessage()"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x37",
    "q": "Which one of the following is NOT a UI Action type?",
    "options": [
     {
      "k": "A",
      "t": "Form choice"
     },
     {
      "k": "B",
      "t": "Form button"
     },
     {
      "k": "C",
      "t": "List choice"
     },
     {
      "k": "D",
      "t": "List banner button"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x38",
    "q": "Which one of the following is NOT a debugging strategy for client-side scripts?",
    "options": [
     {
      "k": "A",
      "t": "Field Watcher"
     },
     {
      "k": "B",
      "t": "g_form.addInfoMessage()"
     },
     {
      "k": "C",
      "t": "jslog()"
     },
     {
      "k": "D",
      "t": "gs.log()"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x39",
    "q": "Which objects can you use in a Scheduled Script Execution (Scheduled Job) script?",
    "options": [
     {
      "k": "A",
      "t": "GlideSystem and current"
     },
     {
      "k": "B",
      "t": "GlideSystem and GlideRecord"
     },
     {
      "k": "C",
      "t": "GlideUser and GlideRecord"
     },
     {
      "k": "D",
      "t": "GlideRecord and current"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x40",
    "q": "Which source control operation is available from BOTH Studio and the Git Repository?",
    "options": [
     {
      "k": "A",
      "t": "Switch Branch"
     },
     {
      "k": "B",
      "t": "Stash Local Changes"
     },
     {
      "k": "C",
      "t": "Create Branch"
     },
     {
      "k": "D",
      "t": "Commit Changes"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x41",
    "q": "Which of the following statements is true for the Form Designer? (3 options)",
    "options": [
     {
      "k": "A",
      "t": "To remove a field from the form layout, hover over the field to enable the Action buttons, and select the Delete (X) button."
     },
     {
      "k": "B",
      "t": "To create a new field on a form’s table, drag the appropriate data type from the Field Types tab to the form and then configure the new field"
     },
     {
      "k": "C",
      "t": "To add a field to the form layout, drag the field from the Fields tab to the desired destination on the form."
     },
     {
      "k": "D",
      "t": "To add a section to the form layout, drag it from the Field Types tab to the desired destination on the form."
     }
    ],
    "answer": [
     "A",
     "B",
     "C"
    ],
    "multi": true,
    "notes": "https://docs.servicenow.com/en-US/bundle/tokyo-platform-administration/page/administer/form-administration/concept/c_FormDesign.html",
    "ref": []
   },
   {
    "id": "x42",
    "q": "Which platform feature can be used to determine the relationships between field in an Import Set table to field in an existing ServiceNow table?",
    "options": [
     {
      "k": "A",
      "t": "Transform Map"
     },
     {
      "k": "B",
      "t": "Cl Relationship Builder"
     },
     {
      "k": "C",
      "t": "Data Sources"
     },
     {
      "k": "D",
      "t": "Business Service Management Map"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x43",
    "q": "A scoped application containing Flow Designer content dedicated to a particular application is called a(n):",
    "options": [
     {
      "k": "A",
      "t": "Bundle"
     },
     {
      "k": "B",
      "t": "Spoke"
     },
     {
      "k": "C",
      "t": "Action"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x44",
    "q": "Which of the following CANNOT be debugged using the Field Watcher?",
    "options": [
     {
      "k": "A",
      "t": "Client Scripts"
     },
     {
      "k": "B",
      "t": "Business Rules"
     },
     {
      "k": "C",
      "t": "Access Controls"
     },
     {
      "k": "D",
      "t": "Script Includes"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x45",
    "q": "How to see what scripts, reports, and other application artifacts will be present in a published application:",
    "options": [
     {
      "k": "A",
      "t": "Open the list of Update Sets for the instance"
     },
     {
      "k": "B",
      "t": "Examine the Application Files Related List in the application to be published"
     },
     {
      "k": "C",
      "t": "Open the artifact records individually to verify the value in the Application field"
     },
     {
      "k": "D",
      "t": "Enter the name of the Application in the Global search field"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x46",
    "q": "Which one of the following is true regarding Application Scope?",
    "options": [
     {
      "k": "A",
      "t": "Any developer can edit any application"
     },
     {
      "k": "B",
      "t": "All applications are automatically part of the Global scope"
     },
     {
      "k": "C",
      "t": "Developers can choose the prefix for a scope’s namespace"
     },
     {
      "k": "D",
      "t": "Applications downloaded from 3rd party ServiceNow application developers cannot have naming conflicts"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x47",
    "q": "What is a Module?",
    "options": [
     {
      "k": "A",
      "t": "A way of helping users quickly access information and services by filtering the items in the Application Navigator"
     },
     {
      "k": "B",
      "t": "The functionality within an application menu such as opening a page in the content frame or a separate tab or window"
     },
     {
      "k": "C",
      "t": "A group of menus, or pages, providing related information and functionality to end-users"
     },
     {
      "k": "D",
      "t": "A web-based way of providing software to end-users"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x48",
    "q": "Which one of the following is part of the client-side scripting API?",
    "options": [
     {
      "k": "A",
      "t": "workflow.scratchpad"
     },
     {
      "k": "B",
      "t": "GlideUser object (g_user)"
     },
     {
      "k": "C",
      "t": "GlideSystem object (gs)"
     },
     {
      "k": "D",
      "t": "current and previous objects"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x49",
    "q": "If the Create module field is selected when creating a table, what is the new module’s default behavior?",
    "options": [
     {
      "k": "A",
      "t": "Display a list of all records from the table"
     },
     {
      "k": "B",
      "t": "Open a link to a wiki article with instructions on how to customize the behavior of the new module"
     },
     {
      "k": "C",
      "t": "Open an empty form so new records can be created"
     },
     {
      "k": "D",
      "t": "Display an empty homepage for the application"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x50",
    "q": "Which one of the following is NOT a method used for logging messages in a server-side script for a privately-scoped application?",
    "options": [
     {
      "k": "A",
      "t": "gs.log()"
     },
     {
      "k": "B",
      "t": "gs.error()"
     },
     {
      "k": "C",
      "t": "gs.debug()"
     },
     {
      "k": "D",
      "t": "gs.warn()"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x51",
    "q": "Which one of the following is true?",
    "options": [
     {
      "k": "A",
      "t": "A UI Policy’s Actions execute before the UI Policy’s Scripts"
     },
     {
      "k": "B",
      "t": "A UI Policy’s Scripts execute before the UI Policy’s Actions"
     },
     {
      "k": "C",
      "t": "The execution order for a UI Policy’s Scripts and Actions is determined at runtime"
     },
     {
      "k": "D",
      "t": "A UI Policy’s Actions and Scripts execute at the same time"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "General Order:\n#NAME?\n#NAME?\n#NAME?\n#NAME?",
    "ref": []
   },
   {
    "id": "x52",
    "q": "When a ServiceNow instance requests information from a web service, ServiceNow is the web service:",
    "options": [
     {
      "k": "A",
      "t": "Specialist"
     },
     {
      "k": "B",
      "t": "Consumer"
     },
     {
      "k": "C",
      "t": "Publisher"
     },
     {
      "k": "D",
      "t": "Provider"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x53",
    "q": "Which of the following methods are useful in Access Control scripts?",
    "options": [
     {
      "k": "A",
      "t": "gs.hasRole() and current.isNew()"
     },
     {
      "k": "B",
      "t": "gs.hasRole() and current.isNewRecord()"
     },
     {
      "k": "C",
      "t": "g_user.hasRole() and current.isNew()"
     },
     {
      "k": "D",
      "t": "g_user.hasRole() and current.isNewRecord()"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x54",
    "q": "Which one of the following is NOT a purpose of application scoping?",
    "options": [
     {
      "k": "A",
      "t": "Provide a way of tracking the user who developed an application"
     },
     {
      "k": "B",
      "t": "Provide a relationship between application artifacts"
     },
     {
      "k": "C",
      "t": "Provide a namespace (prefix and scope name) to prevent cross application name collisions"
     },
     {
      "k": "D",
      "t": "Provide controls for how scripts from another scope can alter tables in a scoped application"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x55",
    "q": "When creating new application files in a scoped application, cross scope access is turned on by default in which of the following?",
    "options": [
     {
      "k": "A",
      "t": "Script Include"
     },
     {
      "k": "B",
      "t": "REST messages"
     },
     {
      "k": "C",
      "t": "Table"
     },
     {
      "k": "D",
      "t": "Workflow"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x56",
    "q": "Which of the following objects does a Display Business Rule NOT have access to?",
    "options": [
     {
      "k": "A",
      "t": "g_scratchpad"
     },
     {
      "k": "B",
      "t": "GlideSystem"
     },
     {
      "k": "C",
      "t": "current"
     },
     {
      "k": "D",
      "t": "previous"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x57",
    "q": "Which roles grant access to source control repository operations such as importing applications from source control, or linking an application to source control?",
    "options": [
     {
      "k": "A",
      "t": "admin"
     },
     {
      "k": "B",
      "t": "source_control"
     },
     {
      "k": "C",
      "t": "git_admin"
     },
     {
      "k": "D",
      "t": "source_control_admin"
     }
    ],
    "answer": [
     "A",
     "B"
    ],
    "multi": true,
    "notes": "PLEASE NOTE!!! Since Tokyo release the correct answer will be only admin, but on the exam the question is outdated and it requires two answers which are admin and source control.",
    "ref": []
   },
   {
    "id": "x58",
    "q": "Which one of the following is NOT true for the Weight field?",
    "options": [
     {
      "k": "A",
      "t": "The Weight value defaults to zero"
     },
     {
      "k": "B",
      "t": "A Weight value of zero means that no email should be sent"
     },
     {
      "k": "C",
      "t": "Only Notifications with the highest weight for the same record and recipients are sent"
     },
     {
      "k": "D",
      "t": "A Weight value of zero means the Notification is always sent when the Notification’s When to send criteria is met"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x59",
    "q": "How do I make my accept solution widget conditional on page load in Service Portal ?",
    "options": [
     {
      "k": "A",
      "t": "Use ngApp"
     },
     {
      "k": "B",
      "t": "Use ngShow"
     },
     {
      "k": "C",
      "t": "Use ng-if"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x60",
    "q": "Which one of the following is the fastest way to create and configure a Record Producer?",
    "options": [
     {
      "k": "A",
      "t": "Use the Record Producer module then add and configure all variables manually"
     },
     {
      "k": "B",
      "t": "Open the table in the Table records and select the Add to Service Catalog Related Link"
     },
     {
      "k": "C",
      "t": "Create a Catalog Category, open the category, and select the Add New Record Producer button"
     },
     {
      "k": "D",
      "t": "Open the table’s form, right-click on the form header, and select the Create Record Producer menu item"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x61",
    "q": "Which of the following is NOT a trigger type in Flow Designer?",
    "options": [
     {
      "k": "A",
      "t": "Schedule/Dates"
     },
     {
      "k": "B",
      "t": "Application"
     },
     {
      "k": "C",
      "t": "Outbound Email"
     },
     {
      "k": "D",
      "t": "Record"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x62",
    "q": "Which of the following function is NOT available in the ServiceNow REST API?",
    "options": [
     {
      "k": "A",
      "t": "PATCH"
     },
     {
      "k": "B",
      "t": "COPY"
     },
     {
      "k": "C",
      "t": "DELETE"
     },
     {
      "k": "D",
      "t": "POST"
     },
     {
      "k": "E",
      "t": "GET"
     },
     {
      "k": "F",
      "t": "PUT"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x63",
    "q": "Which of the following scripts do not always run on the server side?",
    "options": [
     {
      "k": "A",
      "t": "Script Includes"
     },
     {
      "k": "B",
      "t": "Business Rule"
     },
     {
      "k": "C",
      "t": "Script Action"
     },
     {
      "k": "D",
      "t": "UI Action"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "For using UI Action as server and client both, there is a check box named as client, tick that one and then in your script you can write client side code and a function named as gsftSubmit() is used to call server end and after that you can put server side code.\nBelow link will help you to understand more!!\nhttps://www.servicenowguru.com/system-ui/ui-actions-system-ui/client-server-code-ui-action/\nAlso there is one out of the box UI Action named as 'Reopen Incident' used as both client and server side, you can go through it.",
    "ref": []
   },
   {
    "id": "x64",
    "q": "In Form Designer, when you edit the label of a field on a child table, the label is updated on?",
    "options": [
     {
      "k": "A",
      "t": "Parent table"
     },
     {
      "k": "B",
      "t": "Base table"
     },
     {
      "k": "C",
      "t": "All tables"
     },
     {
      "k": "D",
      "t": "Child table"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x65",
    "q": "Which of the following actions is not supported by Studio?",
    "options": [
     {
      "k": "A",
      "t": "Enable context menu options to modify data"
     },
     {
      "k": "B",
      "t": "Download only the required session logs."
     },
     {
      "k": "C",
      "t": "Format code indentation with JS Beautify"
     },
     {
      "k": "D",
      "t": "Integrate with source control"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "https://docs.servicenow.com/en-US/bundle/tokyo-application-development/page/build/applications/concept/c_ServiceNowStudio.html",
    "ref": []
   },
   {
    "id": "x66",
    "q": "An application has a table named MyTable with the following three fields: field1, field2, field3. Table.none is set for READ for the Admin and Itil roles. Table.field3 is set for the READ by the Admin role only. What with the Itil role be able to read? (select one)",
    "options": [
     {
      "k": "A",
      "t": "field2, field3"
     },
     {
      "k": "B",
      "t": "field1, field3"
     },
     {
      "k": "C",
      "t": "field1, field2"
     },
     {
      "k": "D",
      "t": "field1, field2, field3"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x67",
    "q": "You are writing an Async Business Rule for a table in a different scope than the Business Rule record. Which one of the following database operations CANNOT be part of the Async Business Rule's configuration?",
    "options": [
     {
      "k": "A",
      "t": "Delete"
     },
     {
      "k": "B",
      "t": "Update"
     },
     {
      "k": "C",
      "t": "Insert"
     },
     {
      "k": "D",
      "t": "Query"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x68",
    "q": "What debugging method you use in the server side scripting in a scoped application?",
    "options": [
     {
      "k": "A",
      "t": "gs.log()"
     },
     {
      "k": "B",
      "t": "gs.debuglog()"
     },
     {
      "k": "C",
      "t": "gs.addInfoMessage()"
     },
     {
      "k": "D",
      "t": "gs.info()"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x69",
    "q": "How is access to Application menus and modules controlled?",
    "options": [
     {
      "k": "A",
      "t": "Client Scripts"
     },
     {
      "k": "B",
      "t": "Roles"
     },
     {
      "k": "C",
      "t": "Application Rules"
     },
     {
      "k": "D",
      "t": "Access controls"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x70",
    "q": "Which of the following are steps in the generalized process for working with events?",
    "options": [
     {
      "k": "A",
      "t": "Write a Business Rule"
     },
     {
      "k": "B",
      "t": "Generate the event"
     },
     {
      "k": "C",
      "t": "Add an event to the Event Registry"
     },
     {
      "k": "D",
      "t": "Respond to the event"
     },
     {
      "k": "E",
      "t": "Create a Scheduled Script Execution"
     }
    ],
    "answer": [
     "B",
     "C",
     "D"
    ],
    "multi": true,
    "notes": "",
    "ref": []
   },
   {
    "id": "x71",
    "q": "How are flow variables access in the flow designer data panel?",
    "options": [
     {
      "k": "A",
      "t": "Scratchpad variables"
     },
     {
      "k": "B",
      "t": "Data pills"
     },
     {
      "k": "C",
      "t": "Newly generated icons"
     },
     {
      "k": "D",
      "t": "New tabs"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "The visual representation of a variable in the Flow Designer user interface is a data pill. Each variable has its own data pill that developers can use to add the variable to action inputs.",
    "ref": []
   },
   {
    "id": "x72",
    "q": "When managing global application files, you can NOT:",
    "options": [
     {
      "k": "A",
      "t": "Move an application file between global applications"
     },
     {
      "k": "B",
      "t": "Move application files into or out of scoped application"
     },
     {
      "k": "C",
      "t": "Remove files from a global application"
     },
     {
      "k": "D",
      "t": "Add files from global scope to a global application"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x73",
    "q": "Identify the way(s) an application can respond to an Event:",
    "options": [
     {
      "k": "A",
      "t": "UI Policy"
     },
     {
      "k": "B",
      "t": "Scheduled Job"
     },
     {
      "k": "C",
      "t": "Script Action"
     },
     {
      "k": "D",
      "t": "Email Notification"
     }
    ],
    "answer": [
     "C",
     "D"
    ],
    "multi": true,
    "notes": "",
    "ref": []
   },
   {
    "id": "x74",
    "q": "Which utility is used to determine if field names in an Import Set match the field names on the target table when importing data into ServiceNow?",
    "options": [
     {
      "k": "A",
      "t": "Business Service Management Map"
     },
     {
      "k": "B",
      "t": "Auto Map Matching Fields"
     },
     {
      "k": "C",
      "t": "Transform Maps"
     },
     {
      "k": "D",
      "t": "CI Relationship Builder"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x75",
    "q": "Which of the following is NOT an example of when an application might use a Scheduled Script Execution(Scheduled Job)?",
    "options": [
     {
      "k": "A",
      "t": "The application needs to run a clean up script on the last day of every month"
     },
     {
      "k": "B",
      "t": "The application needs to query the database every day to look for a unassigned records"
     },
     {
      "k": "C",
      "t": "The application needs to run a client-side script at the same time every day"
     },
     {
      "k": "D",
      "t": "The application needs to send weekly email remainders"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x76",
    "q": "Which method is used to retrieve system property?",
    "options": [
     {
      "k": "A",
      "t": "g_form.getProperty()"
     },
     {
      "k": "B",
      "t": "gs.getAppProperty()"
     },
     {
      "k": "C",
      "t": "g_form.getAppProperty()"
     },
     {
      "k": "D",
      "t": "gs.getProperty()"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x77",
    "q": "Which one of the following best describes what a flow is?",
    "options": [
     {
      "k": "A",
      "t": "A sequence of steps to automate processes on the platform"
     },
     {
      "k": "B",
      "t": "A script that defines the steps to automate processes on the platform"
     },
     {
      "k": "C",
      "t": "A sequence of activities to automate processes on the platform"
     },
     {
      "k": "D",
      "t": "A sequence of actions to automate processes on the platform"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x78",
    "q": "What are the UX (user experience) options available in Guided Application Creator?",
    "options": [
     {
      "k": "A",
      "t": "Workspace"
     },
     {
      "k": "B",
      "t": "Desktop"
     },
     {
      "k": "C",
      "t": "Classic"
     },
     {
      "k": "D",
      "t": "Tablet"
     },
     {
      "k": "E",
      "t": "Mobile"
     }
    ],
    "answer": [
     "C",
     "E"
    ],
    "multi": true,
    "notes": "",
    "ref": []
   },
   {
    "id": "x79",
    "q": "As it relates ServiceNow reporting, which of the following statements describes what a metric can do?",
    "options": [
     {
      "k": "A",
      "t": "A metric is used to measure and evaluate the effectiveness of IT service management processes"
     },
     {
      "k": "B",
      "t": "A metric is a comparative measurement used to report the effectiveness of workflows and SLAs"
     },
     {
      "k": "C",
      "t": "A metric is a time measurement used to report the effectiveness of workflows and SLAs"
     },
     {
      "k": "D",
      "t": "A metric is a report gauge used on homepages to display real-time data"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x80",
    "q": "How can a developer extract data from the response body after calling a REST web service?",
    "options": [
     {
      "k": "A",
      "t": "Click the Convert Response Body button to convert the response."
     },
     {
      "k": "B",
      "t": "Use the XMLDocument2 API to extract data from XML formatted responses."
     },
     {
      "k": "C",
      "t": "Use the JSON API to convert JSON formatted responses to a JavaScript object"
     },
     {
      "k": "D",
      "t": "Use the XMLDocument2 Script Include to parse the XML."
     },
     {
      "k": "E",
      "t": "Use the Convert Response Body wizard to translate the response into an object."
     }
    ],
    "answer": [
     "B",
     "C"
    ],
    "multi": true,
    "notes": "",
    "ref": []
   },
   {
    "id": "x81",
    "q": "Which of the following would not be good fit for an application to run on the ServiceNow instance?",
    "options": [
     {
      "k": "A",
      "t": "Facilities Management application"
     },
     {
      "k": "B",
      "t": "Billing & Cost Management application"
     },
     {
      "k": "C",
      "t": "Virtual Reality Gaming application"
     },
     {
      "k": "D",
      "t": "A meeting room scheduling application"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x82",
    "q": "Which module creates a user for a Automated Test Framework?",
    "options": [
     {
      "k": "A",
      "t": "User Creation"
     },
     {
      "k": "B",
      "t": "Create Group"
     },
     {
      "k": "C",
      "t": "Create Role"
     },
     {
      "k": "D",
      "t": "Create a User"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x83",
    "q": "Which role is required to access Guide Application Creator?",
    "options": [
     {
      "k": "A",
      "t": "sn_gac.app_creator"
     },
     {
      "k": "B",
      "t": "sn_app_creator.app_creator"
     },
     {
      "k": "C",
      "t": "sn_g_app_creator.app_creator"
     },
     {
      "k": "D",
      "t": "sn_developer.app_creator"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x84",
    "q": "What are the core activities of a Workflow?",
    "options": [
     {
      "k": "A",
      "t": "Notifications"
     },
     {
      "k": "B",
      "t": "Utilities"
     },
     {
      "k": "C",
      "t": "Service Catalog"
     },
     {
      "k": "D",
      "t": "Subflows"
     },
     {
      "k": "E",
      "t": "Approvals"
     },
     {
      "k": "F",
      "t": "Timers"
     },
     {
      "k": "G",
      "t": "Conditions"
     },
     {
      "k": "H",
      "t": "Test"
     }
    ],
    "answer": [
     "A",
     "B",
     "C",
     "D",
     "E",
     "F",
     "G"
    ],
    "multi": true,
    "notes": "",
    "ref": []
   },
   {
    "id": "x85",
    "q": "Which of the following modules enables security rule debugging?",
    "options": [
     {
      "k": "A",
      "t": "Access Control > Debugging > Debug Security Rule"
     },
     {
      "k": "B",
      "t": "System Diagnostics > Debugging > Debug Security Rules"
     },
     {
      "k": "C",
      "t": "System Security > Debugging > Debug Security Rules"
     },
     {
      "k": "D",
      "t": "System Security > Session Debug > Debug Security Rules"
     },
     {
      "k": "E",
      "t": "System Diagnostics > Session Debug > Debug Security Rules"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x86",
    "q": "What are the 2 core base tables from which all other tables are extended in ServiceNow?",
    "options": [
     {
      "k": "A",
      "t": "incident and cmdb_ci"
     },
     {
      "k": "B",
      "t": "task and cmdb_model"
     },
     {
      "k": "C",
      "t": "task and cmdb"
     },
     {
      "k": "D",
      "t": "incident and cmdb_rel_ci"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x87",
    "q": "What is the name of the intuitive development interface for building applications?",
    "options": [
     {
      "k": "A",
      "t": "Guided Application Creator"
     },
     {
      "k": "B",
      "t": "ServiceNow Studio"
     },
     {
      "k": "C",
      "t": "ServiceNow Creator"
     },
     {
      "k": "D",
      "t": "App Engine Studio"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x88",
    "q": "Which protects applications by identifying and restricting access to application files and data?",
    "options": [
     {
      "k": "A",
      "t": "ACLs"
     },
     {
      "k": "B",
      "t": "Application Scope"
     },
     {
      "k": "C",
      "t": "Roles"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x89",
    "q": "While debugging security rules, what does the blue color code indicate?",
    "options": [
     {
      "k": "A",
      "t": "Indicates the ACL is already in the cache and does not need to be re-evaluated"
     },
     {
      "k": "B",
      "t": "Access denied"
     },
     {
      "k": "C",
      "t": "Passed"
     },
     {
      "k": "D",
      "t": "Access granted"
     },
     {
      "k": "E",
      "t": "Failed"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x90",
    "q": "What records are used to track cross-scope applications or scripts that request access to an application, application resource or event?",
    "options": [
     {
      "k": "A",
      "t": "Restricted caller access records"
     },
     {
      "k": "B",
      "t": "Caller tracking records"
     },
     {
      "k": "C",
      "t": "Cross-scope access records"
     },
     {
      "k": "D",
      "t": "Access control level records"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x91",
    "q": "Which of the following is NOT a type of annotation?",
    "options": [
     {
      "k": "A",
      "t": "Text"
     },
     {
      "k": "B",
      "t": "Info Box Blue"
     },
     {
      "k": "C",
      "t": "Line Separator"
     },
     {
      "k": "D",
      "t": "Info Box Red"
     },
     {
      "k": "E",
      "t": "Section Separator"
     },
     {
      "k": "F",
      "t": "Info Box Yellow"
     },
     {
      "k": "G",
      "t": "Section Details"
     }
    ],
    "answer": [
     "F"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x92",
    "q": "What is the name of the guided application creator plugin?",
    "options": [
     {
      "k": "A",
      "t": "com.glide.sn-guided-creator-app"
     },
     {
      "k": "B",
      "t": "com.glide.sn-guided-app-creator"
     },
     {
      "k": "C",
      "t": "glide.sn-guided-app-creator"
     },
     {
      "k": "D",
      "t": "com.glide.guided-app-creator"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x93",
    "q": "Which of the following statements must evaluate to true to grant a user access to application table’s record?\na) Conditions configured in the access controls must evaluate to true\nb) Scripts configured in the access control must evaluate to true\nc) The user has one of the roles specified in the required roles related list\nd) Оther matching access controls for the records evaluate to true",
    "options": [
     {
      "k": "A",
      "t": "a and c"
     },
     {
      "k": "B",
      "t": "a and b"
     },
     {
      "k": "C",
      "t": "a, b, c and d"
     },
     {
      "k": "D",
      "t": "a, b, c"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x94",
    "q": "Which of the below is the best practice for adding instructions to a form?",
    "options": [
     {
      "k": "A",
      "t": "Populated read only field"
     },
     {
      "k": "B",
      "t": "Context menu or UI Action"
     },
     {
      "k": "C",
      "t": "Form Annotations"
     },
     {
      "k": "D",
      "t": "Related links to wiki pages"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x95",
    "q": "Which of the following API methods are used when working with datetime in a privately scoped application?",
    "options": [
     {
      "k": "A",
      "t": "GlideSystem"
     },
     {
      "k": "B",
      "t": "GlideDateTime"
     },
     {
      "k": "C",
      "t": "gs.nowDateTime()"
     },
     {
      "k": "D",
      "t": "GlideRecord"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x96",
    "q": "In a business rule which of the following returns the sys_id of the current logged in user?",
    "options": [
     {
      "k": "A",
      "t": "gs.getUserSysID()"
     },
     {
      "k": "B",
      "t": "g_form.getUserSysID()"
     },
     {
      "k": "C",
      "t": "gs.getUserID()"
     },
     {
      "k": "D",
      "t": "g_form.getUserID()"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x97",
    "q": "How does ServiceNow match inbound email to existing records?",
    "options": [
     {
      "k": "A",
      "t": "Watermark"
     },
     {
      "k": "B",
      "t": "Record link"
     },
     {
      "k": "C",
      "t": "Subject Line"
     },
     {
      "k": "D",
      "t": "sys_id"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x98",
    "q": "Which of the following is NOT report type in ServiceNow reports?",
    "options": [
     {
      "k": "A",
      "t": "List"
     },
     {
      "k": "B",
      "t": "Trend"
     },
     {
      "k": "C",
      "t": "Chart"
     },
     {
      "k": "D",
      "t": "Line"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x99",
    "q": "Which of the following can be used to place a report on a Homepage?",
    "options": [
     {
      "k": "A",
      "t": "Gauge"
     },
     {
      "k": "B",
      "t": "Catalog"
     },
     {
      "k": "C",
      "t": "Gadget"
     },
     {
      "k": "D",
      "t": "Tag"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x100",
    "q": "The option in Table configuration that allows this table to be extended from?",
    "options": [
     {
      "k": "A",
      "t": "Extensible"
     },
     {
      "k": "B",
      "t": "Can be Extended"
     },
     {
      "k": "C",
      "t": "Extended By"
     },
     {
      "k": "D",
      "t": "Extends"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x101",
    "q": "When debugging a script a developer can log breakpoints or conditional log points to log messages to the console at specific lines, and remove log points when they are done debugging them. which system property must be set to true to enable log points?",
    "options": [
     {
      "k": "A",
      "t": "com.glide.index_suggestion.debug"
     },
     {
      "k": "B",
      "t": "glide.ui.js_can_debug"
     },
     {
      "k": "C",
      "t": "glide.debugger.log.ui"
     },
     {
      "k": "D",
      "t": "glide.debug.log_point"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x102",
    "q": "Application files in a ServiceNow application are:",
    "options": [
     {
      "k": "A",
      "t": "csv files containing data imported into an application"
     },
     {
      "k": "B",
      "t": "An xml export of the applications table records"
     },
     {
      "k": "C",
      "t": "XML exports of an application export set"
     },
     {
      "k": "D",
      "t": "Artifacts comprising the ServiceNow application"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x103",
    "q": "Which of the following statements is true for managing applications purchased from the Store?",
    "options": [
     {
      "k": "A",
      "t": "Applications that belong to other organizations can be customized."
     },
     {
      "k": "B",
      "t": "There are separate entitlements for application-customizations."
     },
     {
      "k": "C",
      "t": "Applications that belong to other organizations can be changed."
     },
     {
      "k": "D",
      "t": "Customizations cannot revert back to the base system application."
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x104",
    "q": "When creating an application via Guided Application Creator, which of the following is NOT a user experience options?",
    "options": [
     {
      "k": "A",
      "t": "Workplace"
     },
     {
      "k": "B",
      "t": "Portal"
     },
     {
      "k": "C",
      "t": "Classic"
     },
     {
      "k": "D",
      "t": "Mobile"
     }
    ],
    "answer": [
     "A",
     "B"
    ],
    "multi": true,
    "notes": "",
    "ref": []
   },
   {
    "id": "x105",
    "q": "Which Script Debugger feature helps filter debugging searches to quickly narrow down script problems?",
    "options": [
     {
      "k": "A",
      "t": "Session Tracer"
     },
     {
      "k": "B",
      "t": "Script Filter"
     },
     {
      "k": "C",
      "t": "Script Search"
     },
     {
      "k": "D",
      "t": "Script Tracer"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x106",
    "q": "What one of the following is the correct syntax for adding dynamic content to a notification's HTML message field?",
    "options": [
     {
      "k": "A",
      "t": "$current.short_description"
     },
     {
      "k": "B",
      "t": "$short_description"
     },
     {
      "k": "C",
      "t": "current.short_description"
     },
     {
      "k": "D",
      "t": "${short_description}"
     },
     {
      "k": "E",
      "t": "${current.short_description}"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x107",
    "q": "Which of the following is NOT a type of authentication used by REST APIs?",
    "options": [
     {
      "k": "A",
      "t": "OAuth 2.0"
     },
     {
      "k": "B",
      "t": "Basic Auth"
     },
     {
      "k": "C",
      "t": "Mutual authentication using protocol profiles"
     },
     {
      "k": "D",
      "t": "JDBC"
     },
     {
      "k": "E",
      "t": "CIM"
     }
    ],
    "answer": [
     "D",
     "E"
    ],
    "multi": true,
    "notes": "",
    "ref": []
   },
   {
    "id": "x108",
    "q": "Which of the following are NOT methods from the GlideRecord API?",
    "options": [
     {
      "k": "A",
      "t": "query()"
     },
     {
      "k": "B",
      "t": "addEncodedQuery()"
     },
     {
      "k": "C",
      "t": "addQuery()"
     },
     {
      "k": "D",
      "t": "addOrQuery()"
     },
     {
      "k": "E",
      "t": "addAndQuery()"
     }
    ],
    "answer": [
     "D",
     "E"
    ],
    "multi": true,
    "notes": "https://developer.servicenow.com/dev.do#!/learn/learning-plans/quebec/new_to_servicenow/app_store_learnv2_scripting_quebec_gliderecord",
    "ref": []
   },
   {
    "id": "x109",
    "q": "Which of the following pops out a special field messages?",
    "options": [
     {
      "k": "A",
      "t": "g_form.addInfoMessage()"
     },
     {
      "k": "B",
      "t": "g_form.showFieldMsg()"
     },
     {
      "k": "C",
      "t": "g_form.addFieldMessage()"
     },
     {
      "k": "D",
      "t": "g_form.addErrorMessage()"
     },
     {
      "k": "E",
      "t": "g_form.showFieldMessage()"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x110",
    "q": "Which API provides methods to translate text into multiple languages in real life?",
    "options": [
     {
      "k": "A",
      "t": "Dynamic Result Answer"
     },
     {
      "k": "B",
      "t": "Genius Result Answer"
     },
     {
      "k": "C",
      "t": "Dynamic Translation"
     },
     {
      "k": "D",
      "t": "Genius Translation"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x111",
    "q": "What is not true about email notifications? (select one)",
    "options": [
     {
      "k": "A",
      "t": "When"
     },
     {
      "k": "B",
      "t": "How"
     },
     {
      "k": "C",
      "t": "What"
     },
     {
      "k": "D",
      "t": "Who"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x112",
    "q": "The getCurrentDomainID() method is part of which scoped class?",
    "options": [
     {
      "k": "A",
      "t": "Scoped Domain"
     },
     {
      "k": "B",
      "t": "ScopedDCManager"
     },
     {
      "k": "C",
      "t": "GlideRecord"
     },
     {
      "k": "D",
      "t": "Scoped GlideSession"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x113",
    "q": "Which of the following objects does a before business rule have access to?",
    "options": [
     {
      "k": "A",
      "t": "GlideRecord"
     },
     {
      "k": "B",
      "t": "All the above"
     },
     {
      "k": "C",
      "t": "current"
     },
     {
      "k": "D",
      "t": "previous"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x114",
    "q": "Which method is used in emulating mobile for testing?",
    "options": [
     {
      "k": "A",
      "t": "$tablet.do"
     },
     {
      "k": "B",
      "t": "$mobile.do"
     },
     {
      "k": "C",
      "t": "$t.do"
     },
     {
      "k": "D",
      "t": "$m.do"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x115",
    "q": "When evaluating Access Controls, ServiceNow searches and evaluates:",
    "options": [
     {
      "k": "A",
      "t": "Only for matches on the current field"
     },
     {
      "k": "B",
      "t": "Only for matches on the current table"
     },
     {
      "k": "C",
      "t": "From the most specific match to the most generic match"
     },
     {
      "k": "D",
      "t": "From the most generic match to the most specific match"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x116",
    "q": "What is true about homepages on mobile?",
    "options": [
     {
      "k": "A",
      "t": "Same as desktop homepages without the delete option"
     },
     {
      "k": "B",
      "t": "There are no homepages on mobile"
     },
     {
      "k": "C",
      "t": "Same as desktop homepages with the delete option"
     },
     {
      "k": "D",
      "t": "Same as desktop homepages in every way"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x117",
    "q": "Which of the following variables are NOT available in all Business Rules? (Select All That Apply)",
    "options": [
     {
      "k": "A",
      "t": "current"
     },
     {
      "k": "B",
      "t": "GlideSystem"
     },
     {
      "k": "C",
      "t": "previous"
     },
     {
      "k": "D",
      "t": "g_scratchpad"
     }
    ],
    "answer": [
     "C",
     "D"
    ],
    "multi": true,
    "notes": "Display business rules do not have access to previous, before after and async do not have access to g_scratchpad.",
    "ref": []
   },
   {
    "id": "x118",
    "q": "Which one of the following is NOT a GlideUser (g_user) method?",
    "options": [
     {
      "k": "A",
      "t": "hasRole()"
     },
     {
      "k": "B",
      "t": "userName"
     },
     {
      "k": "C",
      "t": "getFullName()"
     },
     {
      "k": "D",
      "t": "hasRoleExactly()"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x119",
    "q": "Which of the below is not a valid state for a scheduled job in ServiceNow instance?",
    "options": [
     {
      "k": "A",
      "t": "Error"
     },
     {
      "k": "B",
      "t": "Running"
     },
     {
      "k": "C",
      "t": "Queued"
     },
     {
      "k": "D",
      "t": "Ready"
     },
     {
      "k": "E",
      "t": "Waiting for approval"
     }
    ],
    "answer": [
     "E"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x120",
    "q": "What does the code search feature do in the studio?",
    "options": [
     {
      "k": "A",
      "t": "Searching in all applications"
     },
     {
      "k": "B",
      "t": "Search from a list of applications"
     },
     {
      "k": "C",
      "t": "Searching in your application"
     },
     {
      "k": "D",
      "t": "Searching in a business rule"
     }
    ],
    "answer": [
     "A",
     "C",
     "D"
    ],
    "multi": true,
    "notes": "",
    "ref": []
   },
   {
    "id": "x121",
    "q": "What is the main purpose of Integration Hub in ServiceNow?",
    "options": [
     {
      "k": "A",
      "t": "Custom application from ServiceNow store used for importing data into ServiceNow"
     },
     {
      "k": "B",
      "t": "Activity in workflow designer to integrate 3rd party applications"
     },
     {
      "k": "C",
      "t": "Enables execution of third-party APIs as part of a flow when a specific event occurs in ServiceNow"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "x122",
    "q": "When ServiceNow receives an inbound email it attempts to match the sender to a user record. Which one of the following is NOT true?",
    "options": [
     {
      "k": "A",
      "t": "Inbound Action scripts can reference the user using methods such as gs.getUserName()"
     },
     {
      "k": "B",
      "t": "If automatic user creation is disabled, the Guest user is impersonated"
     },
     {
      "k": "C",
      "t": "If a match is found, the user is impersonated for the execution of the Inbound Actions"
     },
     {
      "k": "D",
      "t": "If no match is found the email is sent to the Inbox Junk folder"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   }
  ]
 },
 {
  "id": "pdf",
  "name": "CAD 题库 151",
  "source": "PDF",
  "questions": [
   {
    "id": "p1",
    "q": "Which of the following statements is true for the Form Designer?\na) To add a field to the form layout, drag the field from the Fields tab to the desired destination on the form.\nb) To create a new field on a form's table, drag the appropriate data type from the Field Types tab to the form and then configure the new field.\nc) To remove a field from the form layout, hover over the field to enable the Action buttons, and select the Delete (X) button.\nd) To add a section to the form layout, drag it from the Field Types tab to the desired destination on the form.",
    "options": [
     {
      "k": "A",
      "t": "a, b, c, and d"
     },
     {
      "k": "B",
      "t": "b, c, and d"
     },
     {
      "k": "C",
      "t": "a, b, and d"
     },
     {
      "k": "D",
      "t": "a, b, and c"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "p2",
    "q": "Which of the following are configured in an Email Notification?\na) Who will receive the notification.\nb) What content will be in the notification.\nc) When to send the notification.\nd) How to send the notification.",
    "options": [
     {
      "k": "A",
      "t": "a, b and c"
     },
     {
      "k": "B",
      "t": "a, b, and d"
     },
     {
      "k": "C",
      "t": "b, c and d"
     },
     {
      "k": "D",
      "t": "a, c and d"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://hi.service-now.com/kb_view.do?sysparm_article=KB0712569"
    ]
   },
   {
    "id": "p3",
    "q": "To see what scripts, reports, and other application artifacts will be in a published application:",
    "options": [
     {
      "k": "A",
      "t": "Enter the name of the Application in the Global search field"
     },
     {
      "k": "B",
      "t": "Open the list of Update Sets for the instance"
     },
     {
      "k": "C",
      "t": "Examine the Application Files Related List in the application to be published"
     },
     {
      "k": "D",
      "t": "Open the artifact records individually to verify the value in the Application field"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://community.servicenow.com/community?id=community_article&sys_id=d2dce665dbd0dbc01dcaf3231f9619fe"
    ]
   },
   {
    "id": "p4",
    "q": "Which one of the following is NOT a debugging strategy for client-side scripts?",
    "options": [
     {
      "k": "A",
      "t": "g_form.addInfoMessage()"
     },
     {
      "k": "B",
      "t": "Field Watcher"
     },
     {
      "k": "C",
      "t": "jslog()"
     },
     {
      "k": "D",
      "t": "gs.log()"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://developer.servicenow.com/dev.do#!/learn/learning-plans/istanbul/new_to_servicenow/"
    ]
   },
   {
    "id": "p5",
    "q": "Which Application Access configuration field(s) are NOT available if the Can read configuration field is NOT selected?",
    "options": [
     {
      "k": "A",
      "t": "All access to this table via web services"
     },
     {
      "k": "B",
      "t": "Can create, Can update, and Can delete"
     },
     {
      "k": "C",
      "t": "Can read does not affect the availability of other Application Access fields"
     },
     {
      "k": "D",
      "t": "Allow configuration"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "p6",
    "q": "Which of the following is NOT a trigger type in Flow Designer?",
    "options": [
     {
      "k": "A",
      "t": "Outbound Email"
     },
     {
      "k": "B",
      "t": "Application"
     },
     {
      "k": "C",
      "t": "Record"
     },
     {
      "k": "D",
      "t": "Schedule"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://docs.servicenow.com/bundle/orlando-servicenow-platform/page/administer/flow-designer/reference/flow-triggers.html"
    ]
   },
   {
    "id": "p7",
    "q": "When creating new application files in a scoped application, cross scope access is turned on by default in which of the following?",
    "options": [
     {
      "k": "A",
      "t": "REST messages"
     },
     {
      "k": "B",
      "t": "Table"
     },
     {
      "k": "C",
      "t": "Script Include"
     },
     {
      "k": "D",
      "t": "Workflow"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://docs.servicenow.com/bundle/orlando-application-development/page/build/applications/task/set-RCA-level.html"
    ]
   },
   {
    "id": "p8",
    "q": "In an Email Notification, which one of the following is NOT true for the Weight field?",
    "options": [
     {
      "k": "A",
      "t": "Only Notifications with the highest weight for the same record and recipients are sent"
     },
     {
      "k": "B",
      "t": "A Weight value of zero means that no email should be sent"
     },
     {
      "k": "C",
      "t": "The Weight value defaults to zero"
     },
     {
      "k": "D",
      "t": "A Weight value of zero means the Notification is always sent when the Notification's When to send criteria is met"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://docs.servicenow.com/bundle/orlando-servicenow-platform/page/administer/notification/task/t_CreateANotification.html"
    ]
   },
   {
    "id": "p9",
    "q": "Which of the following objects does a Display Business Rule NOT have access to?",
    "options": [
     {
      "k": "A",
      "t": "previous"
     },
     {
      "k": "B",
      "t": "GlideSystem"
     },
     {
      "k": "C",
      "t": "g_scratchpad"
     },
     {
      "k": "D",
      "t": "current"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://community.servicenow.com/community?id=community_question&sys_id=8af90f29db5cdbc01dcaf3231f96197c"
    ]
   },
   {
    "id": "p10",
    "q": "Which of the following features are available to Global applications? (Choose two.)",
    "options": [
     {
      "k": "A",
      "t": "Automated Test Framework"
     },
     {
      "k": "B",
      "t": "Source Control"
     },
     {
      "k": "C",
      "t": "Delegated Development"
     },
     {
      "k": "D",
      "t": "Flow Designer"
     }
    ],
    "answer": [
     "C",
     "D"
    ],
    "multi": true,
    "notes": "",
    "ref": []
   },
   {
    "id": "p11",
    "q": "Which one of the following is NOT a UI Action type?",
    "options": [
     {
      "k": "A",
      "t": "List choice"
     },
     {
      "k": "B",
      "t": "Form button"
     },
     {
      "k": "C",
      "t": "List banner button"
     },
     {
      "k": "D",
      "t": "Form choice"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://docs.servicenow.com/bundle/orlando-platform-administration/page/administer/list-administration/task/t_EditingAUIAction.html"
    ]
   },
   {
    "id": "p12",
    "q": "Which of the following is NOT supported by Flow Designer?",
    "options": [
     {
      "k": "A",
      "t": "Call a subflow from a flow"
     },
     {
      "k": "B",
      "t": "Test a flow with rollback"
     },
     {
      "k": "C",
      "t": "Use Delegated Developer"
     },
     {
      "k": "D",
      "t": "Run a flow from a MetricBase Trigger"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://community.servicenow.com/community?id=community_question&sys_id=b4d26e44db13ab409540e15b8a9619c9"
    ]
   },
   {
    "id": "p13",
    "q": "Which of the following are true for reports in ServiceNow? (Choose three.)",
    "options": [
     {
      "k": "A",
      "t": "Any user can see any report shared with them."
     },
     {
      "k": "B",
      "t": "Can be a graphical representation of data."
     },
     {
      "k": "C",
      "t": "All users can generate reports on any table."
     },
     {
      "k": "D",
      "t": "Can be run on demand by authorized users."
     },
     {
      "k": "E",
      "t": "Can be scheduled to be run and distributed by email."
     }
    ],
    "answer": [
     "A",
     "B",
     "D"
    ],
    "multi": true,
    "notes": "",
    "ref": [
     "https://docs.servicenow.com/bundle/orlando-performance-analytics-and-reporting/page/use/reporting/task/t_ShareASetting.html"
    ]
   },
   {
    "id": "p14",
    "q": "Modules must have a Link type. Which one of the following is a list of Link types?",
    "options": [
     {
      "k": "A",
      "t": "List of Records, Separator, Catalog Type, Roles"
     },
     {
      "k": "B",
      "t": "Assessment, List of Records, Separator, Timeline Page"
     },
     {
      "k": "C",
      "t": "List of Records, Content Page, Order, URL (from arguments:)"
     },
     {
      "k": "D",
      "t": "Assessment, List of Records, Content Page, Roles"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://docs.servicenow.com/bundle/geneva-servicenow-platform/page/administer/navigation_and_ui/reference/r_ModuleLinkTypes.html"
    ]
   },
   {
    "id": "p15",
    "q": "Which one of the following is true for a table with the `Allow configuration` Application Access option selected?",
    "options": [
     {
      "k": "A",
      "t": "Only the in scope application's scripts can create Business Rules for the table"
     },
     {
      "k": "B",
      "t": "Any user with the application's user role can modify the application's scripts"
     },
     {
      "k": "C",
      "t": "Out of scope applications can create Business Rules for the table"
     },
     {
      "k": "D",
      "t": "Out of scope applications can add new tables to the scoped application"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://community.servicenow.com/community?id=community_question&sys_id=1a721819dbfa23409a64e15b8a9619d2"
    ]
   },
   {
    "id": "p16",
    "q": "When working in the Form Designer, configuring the label of a field in a child table changes the label on which table(s)?",
    "options": [
     {
      "k": "A",
      "t": "base table"
     },
     {
      "k": "B",
      "t": "child table"
     },
     {
      "k": "C",
      "t": "parent table"
     },
     {
      "k": "D",
      "t": "all tables"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://community.servicenow.com/community?id=community_question&sys_id=7ddc4462dbe2b3840be6a345ca9619af"
    ]
   },
   {
    "id": "p17",
    "q": "Which one of the following is true?",
    "options": [
     {
      "k": "A",
      "t": "A UI Policy's Actions execute before the UI Policy's Scripts"
     },
     {
      "k": "B",
      "t": "The execution order for a UI Policy's Scripts and Actions is determined at runtime"
     },
     {
      "k": "C",
      "t": "A UI Policy's Scripts execute before the UI Policy's Actions"
     },
     {
      "k": "D",
      "t": "A UI Policy's Actions and Scripts execute at the same time"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://community.servicenow.com/community?id=community_question&sys_id=5cf5d3f7db72f784f7fca851ca96199b"
    ]
   },
   {
    "id": "p18",
    "q": "Here is the Business Rule script template: This type of JavaScript function is known as:",
    "options": [
     {
      "k": "A",
      "t": "Constructor"
     },
     {
      "k": "B",
      "t": "Scoped"
     },
     {
      "k": "C",
      "t": "Anonymous"
     },
     {
      "k": "D",
      "t": "Self-invoking"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "p19",
    "q": "Which method call returns true only if the currently logged in user has the catalog_admin role and in no other case?",
    "options": [
     {
      "k": "A",
      "t": "g_user.hasRole('catalog_admin')"
     },
     {
      "k": "B",
      "t": "g_user.hasRoleExactly('catalog_admin')"
     },
     {
      "k": "C",
      "t": "g_user.hasRoleOnly('catalog_admin')"
     },
     {
      "k": "D",
      "t": "g_user.hasRoleFromList('catalog_admin')"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://community.servicenow.com/community?id=community_question&sys_id=dff705e6db7757c0d58ea345ca96196b"
    ]
   },
   {
    "id": "p20",
    "q": "There is a basic strategy when creating a Utils Script Include. Identify the step that does not belong.",
    "options": [
     {
      "k": "A",
      "t": "Identify the table"
     },
     {
      "k": "B",
      "t": "Script the function(s)"
     },
     {
      "k": "C",
      "t": "Create a class"
     },
     {
      "k": "D",
      "t": "Create a prototype object from the new class"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "p21",
    "q": "Which roles grant access to source control repository operations such as importing applications from source control, or linking an application to source control? (Choose two.)",
    "options": [
     {
      "k": "A",
      "t": "source_control"
     },
     {
      "k": "B",
      "t": "source_control_admin"
     },
     {
      "k": "C",
      "t": "admin"
     },
     {
      "k": "D",
      "t": "git_admin"
     }
    ],
    "answer": [
     "A",
     "C"
    ],
    "multi": true,
    "notes": "",
    "ref": [
     "https://docs.servicenow.com/bundle/orlando-application-development/page/build/applications/task/t_LinkAnApplicationToSourceControl.html",
     "https://docs.servicenow.com/bundle/tokyo-application-development/page/build/applications/task/t_LinkAnApplicationToSourceControl.html",
     "https://docs.servicenow.com/bundle/tokyo-application-development/page/build/applications/task/t_ImportAppFromSourceControl.html",
     "https://docs.servicenow.com/bundle/tokyo-application-development/page/build/applications/task/t_LinkAnApplicationToSourceControl.html",
     "https://developer.servicenow.com/dev.do#!/learn/learning-plans/rome/new_to_servicenow/app_store_learnv2_devenvironment_rome_linking_an_application_to_source_control"
    ]
   },
   {
    "id": "p22",
    "q": "When configuring the content of an Email Notification, which syntax should be used to reference the properties of an event triggering the Notification?",
    "options": [
     {
      "k": "A",
      "t": "${event.<property name>}"
     },
     {
      "k": "B",
      "t": "${current.<property name>}"
     },
     {
      "k": "C",
      "t": "${<property name>.getDisplayValue()}"
     },
     {
      "k": "D",
      "t": "${gs.<property name>}"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://community.servicenow.com/community?id=community_question&sys_id=e017cbe5db1cdbc01dcaf3231f9619a3"
    ]
   },
   {
    "id": "p23",
    "q": "Which one of the following is true for a Script Include with a Protection Policy value of Protected?",
    "options": [
     {
      "k": "A",
      "t": "Any user with the protected_edit role can see and edit the Script Include"
     },
     {
      "k": "B",
      "t": "The Protection policy option can only be enabled by a user with the admin role"
     },
     {
      "k": "C",
      "t": "The Protection Policy is applied only if the glide.app.apply_protection system property value is true"
     },
     {
      "k": "D",
      "t": "The Protection Policy is applied only if the application is downloaded from the ServiceNow App Store"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "p24",
    "q": "Which one of the following is true for GlideUser (g_user) methods?",
    "options": [
     {
      "k": "A",
      "t": "Can be used in Client Scripts and UI Policies only"
     },
     {
      "k": "B",
      "t": "Can be used in Business Rules only"
     },
     {
      "k": "C",
      "t": "Can be used in Client Scripts, UI Policies, and UI Actions"
     },
     {
      "k": "D",
      "t": "Can be used in Business Rules, and Scripts Includes"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://developer.servicenow.com/dev.do#!/reference/api/newyork/client/c_GlideUserAPI"
    ]
   },
   {
    "id": "p25",
    "q": "When configuring a module, what does the Override application menu roles configuration option do?",
    "options": [
     {
      "k": "A",
      "t": "Users with the module role but without access to the application menu access the module"
     },
     {
      "k": "B",
      "t": "Self-Service users can access the module even though they do not have roles"
     },
     {
      "k": "C",
      "t": "Admin is given access to the module even if Access Controls would ordinarily prevent access"
     },
     {
      "k": "D",
      "t": "Users with access to the application menu can see the module even if they don't have the module role"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://hi.service-now.com/kb_view.do?sysparm_article=KB0716421"
    ]
   },
   {
    "id": "p26",
    "q": "Which platform feature can be used to determine the relationships between field in an Import Set table to field in an existing ServiceNow table?",
    "options": [
     {
      "k": "A",
      "t": "Business Service Management Map"
     },
     {
      "k": "B",
      "t": "Data Sources"
     },
     {
      "k": "C",
      "t": "Transform Map"
     },
     {
      "k": "D",
      "t": "CI Relationship Builder"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://community.servicenow.com/community?id=community_question&sys_id=69fc8369db9cdbc01dcaf3231f961935"
    ]
   },
   {
    "id": "p27",
    "q": "When configuring a REST Message, the Endpoint is:",
    "options": [
     {
      "k": "A",
      "t": "The commands to the REST script to stop execution"
     },
     {
      "k": "B",
      "t": "The URI of the data to be accessed, queried, or modified"
     },
     {
      "k": "C",
      "t": "Information about the format of the returned data"
     },
     {
      "k": "D",
      "t": "The response from the provider indicating there is no data to send back"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://docs.servicenow.com/bundle/orlando-application-development/page/integrate/outbound-rest/reference/r_RESTMessageElements.html"
    ]
   },
   {
    "id": "p28",
    "q": "When evaluating Access Controls, ServiceNow searches and evaluates:",
    "options": [
     {
      "k": "A",
      "t": "Only for matches on the current table"
     },
     {
      "k": "B",
      "t": "Only for matches on the current field"
     },
     {
      "k": "C",
      "t": "From the most specific match to the most generic match"
     },
     {
      "k": "D",
      "t": "From the most generic match to the most specific match"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "p29",
    "q": "In a Business Rule, which one of the following returns true if the currently logged in user has the admin role?",
    "options": [
     {
      "k": "A",
      "t": "g_form.hasRoleExactly('admin')"
     },
     {
      "k": "B",
      "t": "gs.hasRole('admin')"
     },
     {
      "k": "C",
      "t": "g_form.hasRole('admin')"
     },
     {
      "k": "D",
      "t": "gs.hasRoleExactly('admin')"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "p30",
    "q": "From the list below, identify one reason an application might NOT be a good fit with ServiceNow. The application:",
    "options": [
     {
      "k": "A",
      "t": "Needs workflow to manage processes"
     },
     {
      "k": "B",
      "t": "Requires as-is use of low-level programming libraries"
     },
     {
      "k": "C",
      "t": "Requires reporting capabilities"
     },
     {
      "k": "D",
      "t": "Uses forms extensively to interact with data"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "p31",
    "q": "Identify the incorrect statement about Delegated Development in ServiceNow.",
    "options": [
     {
      "k": "A",
      "t": "Administrators can grant non-admin users the ability to develop global applications."
     },
     {
      "k": "B",
      "t": "Administrators can specify which application file types the developer can access."
     },
     {
      "k": "C",
      "t": "Administrators can grant the developer access to script fields."
     },
     {
      "k": "D",
      "t": "Administrators can grant the developer access to security records."
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://docs.servicenow.com/bundle/orlando-application-development/page/build/applications/concept/c_DelegatedDevelopment.html"
    ]
   },
   {
    "id": "p32",
    "q": "One of the uses of the ServiceNow REST API Explorer is:",
    "options": [
     {
      "k": "A",
      "t": "Practice using REST to interact with public data providers"
     },
     {
      "k": "B",
      "t": "Find resources on the web for learning about REST"
     },
     {
      "k": "C",
      "t": "Convert SOAP Message functions to REST methods"
     },
     {
      "k": "D",
      "t": "Create sample code for sending REST requests to ServiceNow"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://developer.servicenow.com/dev.do#!/learn/courses/newyork/app_store_learnv2_rest_newyork_rest_integrations/"
    ]
   },
   {
    "id": "p33",
    "q": "Which one of the following is true regarding Application Scope?",
    "options": [
     {
      "k": "A",
      "t": "All applications are automatically part of the Global scope"
     },
     {
      "k": "B",
      "t": "Applications downloaded from 3 party ServiceNow application developers cannot have naming conflicts rd"
     },
     {
      "k": "C",
      "t": "Any developer can edit any application"
     },
     {
      "k": "D",
      "t": "Developers can choose the prefix for a scope's namespace"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "p34",
    "q": "Which one of the following is the baseline behavior of a table in a privately-scoped application?",
    "options": [
     {
      "k": "A",
      "t": "The table and its data are not accessible using web services"
     },
     {
      "k": "B",
      "t": "Any Business Rule can read, write, delete, and update from the table"
     },
     {
      "k": "C",
      "t": "Only artifacts in the table's application can read from the table"
     },
     {
      "k": "D",
      "t": "All application scopes can read from the table"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "p35",
    "q": "Which one of the following is NOT a purpose of application scoping?",
    "options": [
     {
      "k": "A",
      "t": "Provide a relationship between application artifacts"
     },
     {
      "k": "B",
      "t": "Provide a way of tracking the user who developed an application"
     },
     {
      "k": "C",
      "t": "Provide a namespace (prefix and scope name) to prevent cross application name collisions"
     },
     {
      "k": "D",
      "t": "Provide controls for how scripts from another scope can alter tables in a scoped application"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "p36",
    "q": "It is best practice to define the business requirements and the process(es) an application will manage as part of the application development plan. What are some of the considerations to document as part of the business process?",
    "options": [
     {
      "k": "A",
      "t": "Business problem, data input/output, users/stakeholders, and process steps"
     },
     {
      "k": "B",
      "t": "Business problem, data input/output, project schedule, and process steps"
     },
     {
      "k": "C",
      "t": "Business problem, data input/output, users/stakeholders, and database capacity"
     },
     {
      "k": "D",
      "t": "Business problem, users/stakeholders, available licenses, and database capacity"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "p37",
    "q": "Which of the following statements does NOT apply when extending an existing table?",
    "options": [
     {
      "k": "A",
      "t": "The parent table's Access Controls are evaluated when determining access to the new table's records and fields"
     },
     {
      "k": "B",
      "t": "The new table inherits the functionality built into the parent table"
     },
     {
      "k": "C",
      "t": "The new table inherits all of the fields from the parent table"
     },
     {
      "k": "D",
      "t": "You must script and configure all required behaviors"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://developer.servicenow.com/dev.do#!/learn/learning-plans/orlando/new_to_servicenow/app_store_learnv2_buildneedit_orlando_tables"
    ]
   },
   {
    "id": "p38",
    "q": "Which of the following CANNOT be debugged using the Field Watcher?",
    "options": [
     {
      "k": "A",
      "t": "Business Rules"
     },
     {
      "k": "B",
      "t": "Script Includes"
     },
     {
      "k": "C",
      "t": "Client Scripts"
     },
     {
      "k": "D",
      "t": "Access Controls"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://docs.servicenow.com/bundle/orlando-application-development/page/script/debugging/concept/c_FieldWatcher.html"
    ]
   },
   {
    "id": "p39",
    "q": "Which objects can be used in Inbound Action scripts?",
    "options": [
     {
      "k": "A",
      "t": "current and previous"
     },
     {
      "k": "B",
      "t": "current and email"
     },
     {
      "k": "C",
      "t": "current and event"
     },
     {
      "k": "D",
      "t": "current and producer"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "p40",
    "q": "Which one of the following is part of the client-side scripting API?",
    "options": [
     {
      "k": "A",
      "t": "workflow.scratchpad"
     },
     {
      "k": "B",
      "t": "GlideUser object (g_user)"
     },
     {
      "k": "C",
      "t": "current and previous objects"
     },
     {
      "k": "D",
      "t": "GlideSystem object (gs)"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "p41",
    "q": "Application developers configure ServiceNow using industry standard JavaScript to`�",
    "options": [
     {
      "k": "A",
      "t": "Enable the right-click to edit the context menus on applications in the navigator"
     },
     {
      "k": "B",
      "t": "Extend and add functionality"
     },
     {
      "k": "C",
      "t": "Customize the organization's company logo and banner text"
     },
     {
      "k": "D",
      "t": "Configure the outgoing email display name"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "p42",
    "q": "How many applications menus can an application have?",
    "options": [
     {
      "k": "A",
      "t": "3, one for an application's user modules, one for an application's administrator modules, and one for the ServiceNow administrator's modules"
     },
     {
      "k": "B",
      "t": "As many as the application design requires"
     },
     {
      "k": "C",
      "t": "2, one for an application's user modules and one for an application's administrator modules"
     },
     {
      "k": "D",
      "t": "1, which is used for all application modules"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://docs.servicenow.com/bundle/orlando-platform-user-interface/page/administer/navigation-and-ui/task/t_CreateAnApplicationMenu.html"
    ]
   },
   {
    "id": "p43",
    "q": "The source control operation used to store local changes on an instance for later application is called a(n) <blank>.",
    "options": [
     {
      "k": "A",
      "t": "Branch"
     },
     {
      "k": "B",
      "t": "Tag"
     },
     {
      "k": "C",
      "t": "Stash"
     },
     {
      "k": "D",
      "t": "Update set"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://docs.servicenow.com/bundle/orlando-application-development/page/build/applications/task/t_StashLocalChanges.html"
    ]
   },
   {
    "id": "p44",
    "q": "What syntax is used in a Record Producer script to access values from Record Producer form fields?",
    "options": [
     {
      "k": "A",
      "t": "producer.field_name"
     },
     {
      "k": "B",
      "t": "producer.variablename"
     },
     {
      "k": "C",
      "t": "current.variable_name"
     },
     {
      "k": "D",
      "t": "current.field_name"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://community.servicenow.com/community?id=community_question&sys_id=cc3803addb1cdbc01dcaf3231f9619b6"
    ]
   },
   {
    "id": "p45",
    "q": "Which of the following methods prints a message on a blue background to the top of the current form by default?",
    "options": [
     {
      "k": "A",
      "t": "g_form.addInfoMsg()"
     },
     {
      "k": "B",
      "t": "g_form.addInfoMessage()"
     },
     {
      "k": "C",
      "t": "g_form.showFieldMessage()"
     },
     {
      "k": "D",
      "t": "g_form.showFieldMsg()"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://docs.servicenow.com/bundle/orlando-application-development/page/script/useful-scripts/reference/r_DisplayFieldMessages.html"
    ]
   },
   {
    "id": "p46",
    "q": "A scoped application containing Flow Designer content dedicated to a particular application is called a(n):",
    "options": [
     {
      "k": "A",
      "t": "Spoke"
     },
     {
      "k": "B",
      "t": "Bundle"
     },
     {
      "k": "C",
      "t": "Action"
     },
     {
      "k": "D",
      "t": "Flow"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://community.servicenow.com/community?id=community_blog&sys_id=7b3af354db93ab80afc902d5ca9619bc"
    ]
   },
   {
    "id": "p47",
    "q": "What is a Module?",
    "options": [
     {
      "k": "A",
      "t": "The functionality within an application menu such as opening a page in the content frame or a separate tab or window"
     },
     {
      "k": "B",
      "t": "A group of menus, or pages, providing related information and functionality to end-users"
     },
     {
      "k": "C",
      "t": "A way of helping users quickly access information and services by filtering the items in the Application Navigator"
     },
     {
      "k": "D",
      "t": "A web-based way of providing software to end-users"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://docs.servicenow.com/bundle/orlando-platform-user-interface/page/administer/navigation-and-ui/task/t_CreateAModule.html"
    ]
   },
   {
    "id": "p48",
    "q": "Which source control operation is available from BOTH Studio and the Git Repository?",
    "options": [
     {
      "k": "A",
      "t": "Create Branch"
     },
     {
      "k": "B",
      "t": "Apply Remote Changes"
     },
     {
      "k": "C",
      "t": "Stash Local Changes"
     },
     {
      "k": "D",
      "t": "Edit Repository Configurations"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "p49",
    "q": "Which one of the following is NOT required to link a ServiceNow application to a Git repository?",
    "options": [
     {
      "k": "A",
      "t": "Password"
     },
     {
      "k": "B",
      "t": "URL"
     },
     {
      "k": "C",
      "t": "User name"
     },
     {
      "k": "D",
      "t": "Application name"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://docs.servicenow.com/bundle/orlando-application-development/page/build/applications/task/t_LinkAnApplicationToSourceControl.html"
    ]
   },
   {
    "id": "p50",
    "q": "Which Report Type(s) can be created by right-clicking on a column header in a table's list?",
    "options": [
     {
      "k": "A",
      "t": "Bar Chart, Pie Chart, Histogram, and Line"
     },
     {
      "k": "B",
      "t": "Bar Chart"
     },
     {
      "k": "C",
      "t": "Bar Chart, Pie Chart, and Histogram"
     },
     {
      "k": "D",
      "t": "Bar Chart and Pie Chart"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "p51",
    "q": "Which one of the following is NOT a method used for logging messages in a server-side script for a privately-scoped application?",
    "options": [
     {
      "k": "A",
      "t": "gs.log()"
     },
     {
      "k": "B",
      "t": "gs.error()"
     },
     {
      "k": "C",
      "t": "gs.warn()"
     },
     {
      "k": "D",
      "t": "gs.debug()"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://community.servicenow.com/community?id=community_question&sys_id=bd71cb29db98dbc01dcaf3231f9619c6"
    ]
   },
   {
    "id": "p52",
    "q": "If the Create module field is selected when creating a table, what is the new module's default behavior?",
    "options": [
     {
      "k": "A",
      "t": "Open an empty form so new records can be created"
     },
     {
      "k": "B",
      "t": "Open a link to a wiki article with instructions on how to customize the behavior of the new module"
     },
     {
      "k": "C",
      "t": "Display an empty homepage for the application"
     },
     {
      "k": "D",
      "t": "Display a list of all records from the table"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "p53",
    "q": "How must Application Access be configured to prevent all other private application scopes from creating configuration records on an application's data tables?",
    "options": [
     {
      "k": "A",
      "t": "You must create Access Controls to prevent all other application scopes from creating configuration records on an application's data tables rather than using Application Access"
     },
     {
      "k": "B",
      "t": "Set the Accessible from field value to All application scopes and de-select the Can create option"
     },
     {
      "k": "C",
      "t": "Set the Accessible from field value to This application scope only and de-select the Allow access to this table via web services option"
     },
     {
      "k": "D",
      "t": "Set the Accessible from field value to This application scope only"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://docs.servicenow.com/bundle/orlando-application-development/page/build/applications/concept/c_ExampleGrantingAccessToConfigRecs.html"
    ]
   },
   {
    "id": "p54",
    "q": "What are some of the benefits of extending an existing table such as the Task table when creating a new application?\na) You can repurpose existing fields by simply changing the label.\nb) Use existing fields with no modifications.\nc) Existing logic from the parent table will be automatically applied to the new table.\nd) All of the parent table records are copied to the new table.",
    "options": [
     {
      "k": "A",
      "t": "a, b, c, and d"
     },
     {
      "k": "B",
      "t": "a and b"
     },
     {
      "k": "C",
      "t": "b and c"
     },
     {
      "k": "D",
      "t": "a, b, and c"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "p55",
    "q": "When configuring an Access Control which has no condition or script, which one of the following statements is NOT true?",
    "options": [
     {
      "k": "A",
      "t": "table.*will grant access to every field in a record"
     },
     {
      "k": "B",
      "t": "table.None will grant access to every record on the table"
     },
     {
      "k": "C",
      "t": "table.field will grant access to a specific field in a record"
     },
     {
      "k": "D",
      "t": "table.id will grant access to a specific record on the table"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "p56",
    "q": "Which of the following methods are useful in Access Control scripts?",
    "options": [
     {
      "k": "A",
      "t": "g_user.hasRole() and current.isNewRecord()"
     },
     {
      "k": "B",
      "t": "gs.hasRole() and current.isNewRecord()"
     },
     {
      "k": "C",
      "t": "g_user.hasRole() and current.isNew()"
     },
     {
      "k": "D",
      "t": "gs.hasRole() and current.isNew()"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "http://servicenowmypath.blogspot.com/2017/"
    ]
   },
   {
    "id": "p57",
    "q": "Which one of the following client-side scripts apply to Record Producers?",
    "options": [
     {
      "k": "A",
      "t": "Catalog Client Scripts and Catalog UI Policies"
     },
     {
      "k": "B",
      "t": "UI Scripts and UI Actions"
     },
     {
      "k": "C",
      "t": "UI Scripts and Record Producer Scripts"
     },
     {
      "k": "D",
      "t": "Client Scripts and UI Policies"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://docs.servicenow.com/bundle/orlando-application-development/page/script/client-scripts/concept/c_CatalogClientScriptCreation.html"
    ]
   },
   {
    "id": "p58",
    "q": "When a ServiceNow instance requests information from a web service, ServiceNow is the web service:",
    "options": [
     {
      "k": "A",
      "t": "Publisher"
     },
     {
      "k": "B",
      "t": "Specialist"
     },
     {
      "k": "C",
      "t": "Provider"
     },
     {
      "k": "D",
      "t": "Consumer"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://docs.servicenow.com/bundle/orlando-application-development/page/integrate/web-services/reference/r_AvailableWebServices.html"
    ]
   },
   {
    "id": "p59",
    "q": "Which one of the following is the fastest way to create and configure a Record Producer?",
    "options": [
     {
      "k": "A",
      "t": "Create a Catalog Category, open the category, and select the Add New Record Producer button"
     },
     {
      "k": "B",
      "t": "Use the Record Producer module then add and configure all variables manually"
     },
     {
      "k": "C",
      "t": "Open the table in the Table records and select the Add to Service Catalog Related Link"
     },
     {
      "k": "D",
      "t": "Open the table's form, right-click on the form header, and select the Create Record Producer menu item"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "p60",
    "q": "Which objects can you use in a Scheduled Script Execution (Scheduled Job) script?",
    "options": [
     {
      "k": "A",
      "t": "GlideRecord and current"
     },
     {
      "k": "B",
      "t": "GlideUser and GlideRecord"
     },
     {
      "k": "C",
      "t": "GlideSystem and GlideRecord"
     },
     {
      "k": "D",
      "t": "GlideSystem and current"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://docs.servicenow.com/bundle/orlando-application-development/page/script/useful-scripts/concept/c_UsefulSchedulingScripts.html"
    ]
   },
   {
    "id": "p61",
    "q": "Can inherited fields be deleted from a table?",
    "options": [
     {
      "k": "A",
      "t": "Yes, select the red X in the left-most column in the table definition"
     },
     {
      "k": "B",
      "t": "Yes, but only if they are text fields"
     },
     {
      "k": "C",
      "t": "Yes, but only if there has never been any saved field data"
     },
     {
      "k": "D",
      "t": "No, inherited fields cannot be deleted from a child table"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://community.servicenow.com/community?id=community_question&sys_id=691888a9db12ff004819fb24399619f8"
    ]
   },
   {
    "id": "p62",
    "q": "What is the purpose of the Application Picker?",
    "options": [
     {
      "k": "A",
      "t": "Select an application to run"
     },
     {
      "k": "B",
      "t": "Select an application as a favorite in the Application Navigator"
     },
     {
      "k": "C",
      "t": "Choose an application to edit and set the Application Scope"
     },
     {
      "k": "D",
      "t": "Choose an application to download and install"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://docs.servicenow.com/bundle/paris-application-development/page/build/applications/reference/r_ManagingApplications.html"
    ]
   },
   {
    "id": "p63",
    "q": "What are Application Files in a ServiceNow application?",
    "options": [
     {
      "k": "A",
      "t": "An XML export of an application's table records"
     },
     {
      "k": "B",
      "t": "CSV files containing data imported into an application"
     },
     {
      "k": "C",
      "t": "ServiceNow artifacts comprising an application"
     },
     {
      "k": "D",
      "t": "XML exports of an application's Update Set"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://docs.servicenow.com/bundle/paris-application-development/page/build/applications/concept/c_ApplicationFiles.html"
    ]
   },
   {
    "id": "p64",
    "q": "Which one of the following is NOT true for Modules?",
    "options": [
     {
      "k": "A",
      "t": "Modules open content pages"
     },
     {
      "k": "B",
      "t": "Access to Modules is controlled with roles"
     },
     {
      "k": "C",
      "t": "Every Module must be part of an Application Menu"
     },
     {
      "k": "D",
      "t": "Every Module must be associated with a table"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://community.servicenow.com/community?id=community_question&sys_id=bf40c435db7abf80414eeeb5ca9619b3"
    ]
   },
   {
    "id": "p65",
    "q": "A graphical view of relationships among tables is a <blank>.",
    "options": [
     {
      "k": "A",
      "t": "Schema map"
     },
     {
      "k": "B",
      "t": "Dependency view"
     },
     {
      "k": "C",
      "t": "Graphical User Interface"
     },
     {
      "k": "D",
      "t": "Map source report"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://docs.servicenow.com/bundle/paris-platform-administration/page/administer/table-administration/concept/c_TableAdministration.html"
    ]
   },
   {
    "id": "p66",
    "q": "Which one of the following is true for the Application Picker?",
    "options": [
     {
      "k": "A",
      "t": "All custom application scope and the Global scope appear in the Application Picker"
     },
     {
      "k": "B",
      "t": "All applications in ServiceNow, including baseline applications like Incident, appear in the Application Picker"
     },
     {
      "k": "C",
      "t": "Only custom applications appear in the Application Picker"
     },
     {
      "k": "D",
      "t": "Only downloaded applications appear in the Application Picker"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://docs.servicenow.com/bundle/paris-application-development/page/build/applications/task/t_SelectAnAppFromTheAppPicker.html"
    ]
   },
   {
    "id": "p67",
    "q": "When creating an application through the Guided Application Creator, which of the following is a user experience option?",
    "options": [
     {
      "k": "A",
      "t": "Portal"
     },
     {
      "k": "B",
      "t": "Mobile"
     },
     {
      "k": "C",
      "t": "Self-service"
     },
     {
      "k": "D",
      "t": "Workspace"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://docs.servicenow.com/bundle/quebec-application-development/page/build/guided-app-creator/concept/guided-app-creator.html"
    ]
   },
   {
    "id": "p68",
    "q": "When writing a Client Script to provide feedback targeted at a specific field, which method should be used?",
    "options": [
     {
      "k": "A",
      "t": "g_form.showInfoMessage()"
     },
     {
      "k": "B",
      "t": "g_form.showFieldMsg()"
     },
     {
      "k": "C",
      "t": "g_form.addInfoMessage()"
     },
     {
      "k": "D",
      "t": "g_form.addFieldMsg()"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://docs.servicenow.com/bundle/paris-application-development/page/script/client-scripts/concept/client-script-best-practices.html"
    ]
   },
   {
    "id": "p69",
    "q": "Which actions can a Business Rule take without scripting?",
    "options": [
     {
      "k": "A",
      "t": "Set field values and write to the system log"
     },
     {
      "k": "B",
      "t": "Set field values and generate an event"
     },
     {
      "k": "C",
      "t": "Set field values and add message"
     },
     {
      "k": "D",
      "t": "Set field values and query the database"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://developer.servicenow.com/dev.do#!/learn/learning-plans/orlando/new_to_servicenow/"
    ]
   },
   {
    "id": "p70",
    "q": "Which server-side object provides methods for working with dates when writing a script in a privately scoped application?",
    "options": [
     {
      "k": "A",
      "t": "GlideDateTime"
     },
     {
      "k": "B",
      "t": "GlideRecord"
     },
     {
      "k": "C",
      "t": "GlideSystem"
     },
     {
      "k": "D",
      "t": "current"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://developer.servicenow.com/dev.do#!/reference/api/paris/server_legacy/c_GlideSystemAPI#r_GS-nowNoTZ"
    ]
   },
   {
    "id": "p71",
    "q": "Application developers can specify which ServiceNow page a user sees after submitting a new record using the Record Producer UI. How is the page specified?",
    "options": [
     {
      "k": "A",
      "t": "Create an application property to store the URL"
     },
     {
      "k": "B",
      "t": "Configure the page in the Module that opens the Record Producer UI"
     },
     {
      "k": "C",
      "t": "Write an after Business Rule script for the Record Producer's table: window.redirect = \"<URL>\";"
     },
     {
      "k": "D",
      "t": "Write a script in the Record Producer's Script field: producer.redirect = \"<URL>\";"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://docs.servicenow.com/bundle/orlando-it-service-management/page/product/service-catalog-management/concept/c_PopulatingRecordData.html"
    ]
   },
   {
    "id": "p72",
    "q": "Identify characteristic(s) of a Record Producer. (Choose three.)",
    "options": [
     {
      "k": "A",
      "t": "All records created using this strategy are inserted into the Requested Item [sc_req_item] table."
     },
     {
      "k": "B",
      "t": "Each field prompts the user with a question rather than a field label."
     },
     {
      "k": "C",
      "t": "They must be scripted."
     },
     {
      "k": "D",
      "t": "You can script behaviors of fields in the user interface."
     },
     {
      "k": "E",
      "t": "Graphics can be included on the user interface."
     }
    ],
    "answer": [
     "B",
     "C",
     "D"
    ],
    "multi": true,
    "notes": "",
    "ref": []
   },
   {
    "id": "p73",
    "q": "Which server-side API debug log method is available for scoped applications?",
    "options": [
     {
      "k": "A",
      "t": "gs.log()"
     },
     {
      "k": "B",
      "t": "gs.info()"
     },
     {
      "k": "C",
      "t": "gs.debuglog()"
     },
     {
      "k": "D",
      "t": "gs.print()"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://developer.servicenow.com/dev.do#!/learn/courses/paris/app_store_learnv2_scripting_paris_scripting_in_servicenow/"
    ]
   },
   {
    "id": "p74",
    "q": "Which script types execute on the server? (Choose three.)",
    "options": [
     {
      "k": "A",
      "t": "Business Rule"
     },
     {
      "k": "B",
      "t": "Client Scripts"
     },
     {
      "k": "C",
      "t": "UI Policies"
     },
     {
      "k": "D",
      "t": "Script Actions"
     },
     {
      "k": "E",
      "t": "Scheduled Jobs"
     }
    ],
    "answer": [
     "A",
     "C",
     "D"
    ],
    "multi": true,
    "notes": "",
    "ref": [
     "https://docs.servicenow.com/bundle/paris-application-development/page/script/general-scripting/reference/r_17Scripts.html"
    ]
   },
   {
    "id": "p75",
    "q": "What is the best UX format to use for lists and forms?",
    "options": [
     {
      "k": "A",
      "t": "Forms"
     },
     {
      "k": "B",
      "t": "Lists"
     },
     {
      "k": "C",
      "t": "Standard"
     },
     {
      "k": "D",
      "t": "Classic"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://docs.servicenow.com/bundle/quebec-platform-user-interface/page/use/using-lists/concept/c_UseLists.html"
    ]
   },
   {
    "id": "p76",
    "q": "When creating a table in a privately-scoped application, which four Access Controls are created for the table?",
    "options": [
     {
      "k": "A",
      "t": "Insert, Delete, Query, Write"
     },
     {
      "k": "B",
      "t": "Create, Delete, Read, Write"
     },
     {
      "k": "C",
      "t": "Create, Delete, Read, Update"
     },
     {
      "k": "D",
      "t": "Insert, Delete, Query, Update"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://docs.servicenow.com/bundle/quebec-application-development/page/script/business-rules/concept/c_BusinessRulesInScopedApps.html"
    ]
   },
   {
    "id": "p77",
    "q": "Which one of the following is true for this script fragment? g_user.hasRole('x_my_app_user');",
    "options": [
     {
      "k": "A",
      "t": "There is no g_user.hasRole() method"
     },
     {
      "k": "B",
      "t": "The method returns false only if the currently logged in user has the x_my_app_user role"
     },
     {
      "k": "C",
      "t": "The method returns true only if the currently logged in user has the x_my_app_user role"
     },
     {
      "k": "D",
      "t": "The method returns true if the currently logged in user has the x_my_app_user role or the admin role"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://developer.servicenow.com/dev.do#!/learn/learning-plans/orlando/new_to_servicenow/"
    ]
   },
   {
    "id": "p78",
    "q": "Which one of the following database operations cannot be controlled with Application Access?",
    "options": [
     {
      "k": "A",
      "t": "Query"
     },
     {
      "k": "B",
      "t": "Update"
     },
     {
      "k": "C",
      "t": "Create"
     },
     {
      "k": "D",
      "t": "Delete"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://developer.servicenow.com/dev.do#!/learn/learning-plans/orlando/new_to_servicenow/"
    ]
   },
   {
    "id": "p79",
    "q": "For Application Access there is a configuration option called Allow access to this table via web services. Which one of the following statements is true when this option is selected?",
    "options": [
     {
      "k": "A",
      "t": "This option restricts the ability to delete records via web services but records can always be read"
     },
     {
      "k": "B",
      "t": "Even when not selected, users with the correct permissions can use web services to access the table's records"
     },
     {
      "k": "C",
      "t": "This option restricts access only to SOAP web services but does not apply to REST"
     },
     {
      "k": "D",
      "t": "The user performing the query via web services must have the correct permissions to access the table's records"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "p80",
    "q": "Which of the following statements must evaluate to true for a user to pass an Access Control? (Choose three.)",
    "options": [
     {
      "k": "A",
      "t": "The user has one of the roles specified in the Required roles related list."
     },
     {
      "k": "B",
      "t": "Scripts configured in the Access Control must evaluate to true."
     },
     {
      "k": "C",
      "t": "Other matching Access Controls for the records evaluate to true."
     },
     {
      "k": "D",
      "t": "Conditions configured in the Access Control must evaluate to true."
     },
     {
      "k": "E",
      "t": "The user must be granted access through a business rule."
     }
    ],
    "answer": [
     "B",
     "D",
     "E"
    ],
    "multi": true,
    "notes": "",
    "ref": []
   },
   {
    "id": "p81",
    "q": "What is a workflow context?",
    "options": [
     {
      "k": "A",
      "t": "The table for which a workflow is defined plus any conditions such as \"Active is true\""
     },
     {
      "k": "B",
      "t": "It is generated from a workflow version, executes activities, and follows transitions"
     },
     {
      "k": "C",
      "t": "The business reason or process for which a workflow is designed"
     },
     {
      "k": "D",
      "t": "It is a checked out workflow which is being edited"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0538528"
    ]
   },
   {
    "id": "p82",
    "q": "Which one of the following is a benefit of creating an Application Properties page for each application you develop?",
    "options": [
     {
      "k": "A",
      "t": "Application Properties allow a developer to override the application properties inherited from ServiceNow"
     },
     {
      "k": "B",
      "t": "An Application Properties page is a good landing page for an application"
     },
     {
      "k": "C",
      "t": "Application Properties allow a developer or admin to make changes to an application's behavior without modifying application artifacts"
     },
     {
      "k": "D",
      "t": "Application users know to go to the Application Properties page to change the appearance of an application"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "p83",
    "q": "Which one of the following is NOT an example of when an application might use a Scheduled Script Execution (Scheduled Job)?",
    "options": [
     {
      "k": "A",
      "t": "The application needs to send weekly email reminders to requestors for all records on a table"
     },
     {
      "k": "B",
      "t": "The application needs to run a clean up script on the last day of every month"
     },
     {
      "k": "C",
      "t": "The application needs to query the database every day to look for unassigned records"
     },
     {
      "k": "D",
      "t": "The application needs to run a client-side script at the same time every day"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "p84",
    "q": "Which one of the following objects CANNOT be used in a Script Action script?",
    "options": [
     {
      "k": "A",
      "t": "previous"
     },
     {
      "k": "B",
      "t": "GlideRecord"
     },
     {
      "k": "C",
      "t": "event"
     },
     {
      "k": "D",
      "t": "current"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://docs.servicenow.com/bundle/paris-platform-administration/page/administer/platform-events/reference/r_ScriptActions.html"
    ]
   },
   {
    "id": "p85",
    "q": "How does ServiceNow match inbound email to existing records?",
    "options": [
     {
      "k": "A",
      "t": "Watermark"
     },
     {
      "k": "B",
      "t": "Record link"
     },
     {
      "k": "C",
      "t": "Subject line"
     },
     {
      "k": "D",
      "t": "sys_id"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://developer.servicenow.com/dev.do#!/learn/courses/quebec/app_store_learnv2_flowdesigner_quebec_flow_designer/"
    ]
   },
   {
    "id": "p86",
    "q": "When debugging Email Notifications, what must you check on a user record? (Choose three.)",
    "options": [
     {
      "k": "A",
      "t": "Active must be true."
     },
     {
      "k": "B",
      "t": "The First name and Last name fields must have values."
     },
     {
      "k": "C",
      "t": "The value in the Notification field must be set to enabled."
     },
     {
      "k": "D",
      "t": "The user must not be locked out."
     },
     {
      "k": "E",
      "t": "The Email field must have a value."
     }
    ],
    "answer": [
     "A",
     "D",
     "E"
    ],
    "multi": true,
    "notes": "",
    "ref": [
     "https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0535129"
    ]
   },
   {
    "id": "p87",
    "q": "What are web services?",
    "options": [
     {
      "k": "A",
      "t": "Methods used to create and maintain UI Pages"
     },
     {
      "k": "B",
      "t": "Methods used to allow applications to connect to other software applications over a network"
     },
     {
      "k": "C",
      "t": "Methods used to discover a wide variety of systems and applications"
     },
     {
      "k": "D",
      "t": "They provide a customer-facing view of available service and product offerings provided by departments within the organization"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://docs.servicenow.com/bundle/quebec-application-development/page/integrate/web-services/reference/r_AvailableWebServices.html"
    ]
   },
   {
    "id": "p88",
    "q": "Which of the following methods is NOT part of the ServiceNow REST API?",
    "options": [
     {
      "k": "A",
      "t": "COPY"
     },
     {
      "k": "B",
      "t": "GET"
     },
     {
      "k": "C",
      "t": "DELETE"
     },
     {
      "k": "D",
      "t": "POST"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://developer.servicenow.com/dev.do#!/reference/api/orlando/rest/c_TableAPI"
    ]
   },
   {
    "id": "p89",
    "q": "You are developing the MyApp application that has a table, Table A. When the MyApp application is installed on an instance, you want Table A's records to be installed as part of the application. Table A's records will be installed when:",
    "options": [
     {
      "k": "A",
      "t": "Table A is active and extends the Task table"
     },
     {
      "k": "B",
      "t": "Table A's records are added to the application record using the Create Application Files context menu item"
     },
     {
      "k": "C",
      "t": "Table A has an automatic number counter for new records"
     },
     {
      "k": "D",
      "t": "Table A is not included in the System Clone > Exclude Tables list"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "p90",
    "q": "How can an application link to a repository behind a firewall?",
    "options": [
     {
      "k": "A",
      "t": "This option is not supported."
     },
     {
      "k": "B",
      "t": "Link an application to source control through a MID Server."
     },
     {
      "k": "C",
      "t": "Link an application to source control through an access token."
     },
     {
      "k": "D",
      "t": "Link an application to source control with multi-factor authentication."
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://docs.servicenow.com/bundle/quebec-application-development/page/build/applications/concept/c_SourceControlIntegration.html"
    ]
   },
   {
    "id": "p91",
    "q": "Topic 1 What is the ServiceNow store?",
    "options": [
     {
      "k": "A",
      "t": "Downloadable content ServiceNow script archive"
     },
     {
      "k": "B",
      "t": "Alternate name for the ServiceNow Developer Share site"
     },
     {
      "k": "C",
      "t": "The source for ServiceNow Community created developer content"
     },
     {
      "k": "D",
      "t": "Marketplace for free and paid certified ServiceNow applications and integrations"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "p92",
    "q": "Tables that extend a table do what?",
    "options": [
     {
      "k": "A",
      "t": "Automatically update the application scope"
     },
     {
      "k": "B",
      "t": "Do not inherit the parent's fields"
     },
     {
      "k": "C",
      "t": "Sometimes inherit the parent's fields"
     },
     {
      "k": "D",
      "t": "Inherit the parent's fields"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "p93",
    "q": "When creating an application through the Guided Application Creator, which of the following is NOT an option for creating a table?",
    "options": [
     {
      "k": "A",
      "t": "Create table from template"
     },
     {
      "k": "B",
      "t": "Create table from scratch"
     },
     {
      "k": "C",
      "t": "Extend a table"
     },
     {
      "k": "D",
      "t": "Upload spreadsheet"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "p94",
    "q": "Server-side scripts manage what?",
    "options": [
     {
      "k": "A",
      "t": "Database and backend"
     },
     {
      "k": "B",
      "t": "Playbook access"
     },
     {
      "k": "C",
      "t": "User access"
     },
     {
      "k": "D",
      "t": "Forms and Fields"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "p95",
    "q": "Topic 1 What intuitive development interface guides users through the initial application development process?",
    "options": [
     {
      "k": "A",
      "t": "Guided Tour Designer"
     },
     {
      "k": "B",
      "t": "Guided Application Creator"
     },
     {
      "k": "C",
      "t": "ServiceNow Studio"
     },
     {
      "k": "D",
      "t": "Flow Designer"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "p96",
    "q": "What are some benefits of developing private, scoped applications? (Choose two.)",
    "options": [
     {
      "k": "A",
      "t": "To avoid using a code repository like GitHub or GitLab"
     },
     {
      "k": "B",
      "t": "To reduce risk at code collisions"
     },
     {
      "k": "C",
      "t": "To enable installation and uninstallation of an application"
     },
     {
      "k": "D",
      "t": "To replicate ServiceNow functions a private scope"
     }
    ],
    "answer": [
     "B",
     "C"
    ],
    "multi": true,
    "notes": "",
    "ref": []
   },
   {
    "id": "p97",
    "q": "Which of the following statements is NOT true for the Form Designer?",
    "options": [
     {
      "k": "A",
      "t": "To add a section to the form layout, drag it from the Field Types tab to the desired destination on the form."
     },
     {
      "k": "B",
      "t": "To add a field to the form layout, drag the field from the Fields tab to the desired destination on the form."
     },
     {
      "k": "C",
      "t": "To remove a field from the form layout, hover over the field to enable the Action buttons, and select the Delete (X) button."
     },
     {
      "k": "D",
      "t": "To create a new field on a form's table, drag the appropriate data type from the Field Types tab to the form and then configure the new field."
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "p98",
    "q": "What records are used to track cross-scope applications or scripts that request access to an application, application resource, or event?",
    "options": [
     {
      "k": "A",
      "t": "Restricted caller access records"
     },
     {
      "k": "B",
      "t": "Caller tracking records"
     },
     {
      "k": "C",
      "t": "Access control level records"
     },
     {
      "k": "D",
      "t": "Cross-scope access records"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "p99",
    "q": "Which ATF Test step allows you to create a user with speeded roles and groups for the test?",
    "options": [
     {
      "k": "A",
      "t": "Create a group"
     },
     {
      "k": "B",
      "t": "Impersonation"
     },
     {
      "k": "C",
      "t": "Create a user"
     },
     {
      "k": "D",
      "t": "Create a role"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "p100",
    "q": "What plugin enables the Guided Application Creator?",
    "options": [
     {
      "k": "A",
      "t": "com.glide.sn-guided-app-creator"
     },
     {
      "k": "B",
      "t": "com.glide.service_creator"
     },
     {
      "k": "C",
      "t": "com.glide.snc.apps_creator"
     },
     {
      "k": "D",
      "t": "com.snc.apps_creator_template"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "p101",
    "q": "Which of the following can be an external data source for a ServiceNow application?",
    "options": [
     {
      "k": "A",
      "t": "Microsoft Excel File"
     },
     {
      "k": "B",
      "t": "Data provided by a public web service using SOAP or REST"
     },
     {
      "k": "C",
      "t": "CSV file"
     },
     {
      "k": "D",
      "t": "All of the above"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "p102",
    "q": "Which one of the following is true for the Application Picker and Application Scope?",
    "options": [
     {
      "k": "A",
      "t": "Global is a reserved application which does not appear in the Application Picker"
     },
     {
      "k": "B",
      "t": "Selecting an application from the Application Picker does not set the Application Scope"
     },
     {
      "k": "C",
      "t": "Selecting an application from the Application Picker sets the Application Scope"
     },
     {
      "k": "D",
      "t": "Selecting Global in the Application Picker sets the Application Scope to Incident"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "p103",
    "q": "Which of the following is an available feature in Studio? (Choose two.)",
    "options": [
     {
      "k": "A",
      "t": "Push to update set"
     },
     {
      "k": "B",
      "t": "Merge branches"
     },
     {
      "k": "C",
      "t": "Search code"
     },
     {
      "k": "D",
      "t": "Push to external source control"
     }
    ],
    "answer": [
     "B",
     "C"
    ],
    "multi": true,
    "notes": "",
    "ref": []
   },
   {
    "id": "p104",
    "q": "The Task table is an example of which of the following? (Choose two.)",
    "options": [
     {
      "k": "A",
      "t": "Parent class"
     },
     {
      "k": "B",
      "t": "Legacy class"
     },
     {
      "k": "C",
      "t": "Child class"
     },
     {
      "k": "D",
      "t": "Base class"
     }
    ],
    "answer": [
     "C",
     "D"
    ],
    "multi": true,
    "notes": "",
    "ref": []
   },
   {
    "id": "p105",
    "q": "Topic 1 Which of the following is true about deleting fields from a table?",
    "options": [
     {
      "k": "A",
      "t": "Table records are deleted when a field is deleted"
     },
     {
      "k": "B",
      "t": "User-defined non-inherited fields can be deleted"
     },
     {
      "k": "C",
      "t": "Any field on a table can be deleted"
     },
     {
      "k": "D",
      "t": "Inherited fields can be deleted"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "p106",
    "q": "Why would you build a custom app? (Choose two.)",
    "options": [
     {
      "k": "A",
      "t": "To avoid using a code repository like GitHub or GitLab"
     },
     {
      "k": "B",
      "t": "To replace ServiceNow base tables"
     },
     {
      "k": "C",
      "t": "To fulfill a specific use case on internal processes"
     },
     {
      "k": "D",
      "t": "To create a custom integration for a 3rd party system"
     }
    ],
    "answer": [
     "C",
     "D"
    ],
    "multi": true,
    "notes": "",
    "ref": []
   },
   {
    "id": "p107",
    "q": "What are three ServiceNow table creation methods? (Choose three.)",
    "options": [
     {
      "k": "A",
      "t": "Using legacy Workflows"
     },
     {
      "k": "B",
      "t": "Upload and turn a spreadsheet into a custom table"
     },
     {
      "k": "C",
      "t": "Using Flow Designer"
     },
     {
      "k": "D",
      "t": "Use the Now Experience Table Creator"
     },
     {
      "k": "E",
      "t": "Extend a table"
     },
     {
      "k": "F",
      "t": "Create a custom table"
     }
    ],
    "answer": [
     "B",
     "D",
     "E"
    ],
    "multi": true,
    "notes": "",
    "ref": []
   },
   {
    "id": "p108",
    "q": "When selecting a data type for a field that will be displayed on a form, which of the following statements is NOT correct?",
    "options": [
     {
      "k": "A",
      "t": "Use the String data type tor a free-form text field"
     },
     {
      "k": "B",
      "t": "Use the Phone Number data type to automate phone number data validation"
     },
     {
      "k": "C",
      "t": "Use the Choice data type to limit options in a field"
     },
     {
      "k": "D",
      "t": "Use the Date data type to enter the date and time of day"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "p109",
    "q": "Which one of the following is NOT part of the Form Designer?",
    "options": [
     {
      "k": "A",
      "t": "Page header"
     },
     {
      "k": "B",
      "t": "Schema map"
     },
     {
      "k": "C",
      "t": "Field navigator"
     },
     {
      "k": "D",
      "t": "Form layout"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "p110",
    "q": "Which class is NOT part of the Client side scoped APIs?",
    "options": [
     {
      "k": "A",
      "t": "GlideDialogWindow"
     },
     {
      "k": "B",
      "t": "GlideAjax"
     },
     {
      "k": "C",
      "t": "GlideRecord"
     },
     {
      "k": "D",
      "t": "GlideForm"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "p111",
    "q": "When designing and creating a form what do you create to organize fields on a form?",
    "options": [
     {
      "k": "A",
      "t": "Buttons"
     },
     {
      "k": "B",
      "t": "Tabs"
     },
     {
      "k": "C",
      "t": "Sections"
     },
     {
      "k": "D",
      "t": "Related lists"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "p112",
    "q": "Which one of the following is a good practice for adding instructions to a form?",
    "options": [
     {
      "k": "A",
      "t": "Related links to wiki pages"
     },
     {
      "k": "B",
      "t": "A Context Menu UI Action"
     },
     {
      "k": "C",
      "t": "Annotations"
     },
     {
      "k": "D",
      "t": "A populated read-only field"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "p113",
    "q": "Which of the following GlideRecord methods run a query against a database table? (Choose three.)",
    "options": [
     {
      "k": "A",
      "t": "_get()"
     },
     {
      "k": "B",
      "t": "runQuery()"
     },
     {
      "k": "C",
      "t": "query()"
     },
     {
      "k": "D",
      "t": "_query()"
     },
     {
      "k": "E",
      "t": "get("
     }
    ],
    "answer": [
     "C",
     "D",
     "E"
    ],
    "multi": true,
    "notes": "",
    "ref": []
   },
   {
    "id": "p114",
    "q": "What is the GlideForm Client-side scripting object?",
    "options": [
     {
      "k": "A",
      "t": "sn.form"
     },
     {
      "k": "B",
      "t": "g_form"
     },
     {
      "k": "C",
      "t": "gs.form"
     },
     {
      "k": "D",
      "t": "gs_form"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "p115",
    "q": "In a Business Rule, which one of the following returns the sys_id of the currently logged in user?",
    "options": [
     {
      "k": "A",
      "t": "g_form.getUserID()"
     },
     {
      "k": "B",
      "t": "gs.getUserSysID()"
     },
     {
      "k": "C",
      "t": "gs.getUserID()"
     },
     {
      "k": "D",
      "t": "g_form.getUserSysID()"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "p116",
    "q": "Access Control debug information identifies whether each element of an Access Control granted or denied access. The elements appear in the debug information in the order of evaluation. In which order are the elements of an Access Control evaluated?",
    "options": [
     {
      "k": "A",
      "t": "Conditions, Roles, Script"
     },
     {
      "k": "B",
      "t": "Conditions, Script, Roles"
     },
     {
      "k": "C",
      "t": "Roles, Conditions, Script"
     },
     {
      "k": "D",
      "t": "Script, Conditions, Roles"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "p117",
    "q": "Assume a table called table exists and contains 3 fields: field1, field2, field3. Examine the Access Control list for table: Which field or fields can a user with the itil role read?",
    "options": [
     {
      "k": "A",
      "t": "All fields except field3"
     },
     {
      "k": "B",
      "t": "field1, field2, and field3"
     },
     {
      "k": "C",
      "t": "field1 and field3"
     },
     {
      "k": "D",
      "t": "field3 only"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "p118",
    "q": "Assume a table called table exists and contains 3 fields: field1, field2, field3. Examine the Access Control list for table: Which field or fields can a user with the itil role read?",
    "options": [
     {
      "k": "A",
      "t": "field3 only"
     },
     {
      "k": "B",
      "t": "filed1 and field3"
     },
     {
      "k": "C",
      "t": "All fields"
     },
     {
      "k": "D",
      "t": "All fields except field3"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "p119",
    "q": "Which of the following is NOT a caller access field option?",
    "options": [
     {
      "k": "A",
      "t": "Caller Tracking"
     },
     {
      "k": "B",
      "t": "Caller Restriction"
     },
     {
      "k": "C",
      "t": "None"
     },
     {
      "k": "D",
      "t": "Caller Permission"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "p120",
    "q": "Which method is used to retrieve Application Property values in a script?",
    "options": [
     {
      "k": "A",
      "t": "gs.getProperty()"
     },
     {
      "k": "B",
      "t": "g_form.getAppProperty()"
     },
     {
      "k": "C",
      "t": "g_form.getProperty()"
     },
     {
      "k": "D",
      "t": "gs.getAppProperty()"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "p121",
    "q": "What Module Link type is used to access an Application Properties page?",
    "options": [
     {
      "k": "A",
      "t": "Single Record"
     },
     {
      "k": "B",
      "t": "HTML (from Arguments)"
     },
     {
      "k": "C",
      "t": "URL (from Arguments)"
     },
     {
      "k": "D",
      "t": "Script (from Arguments)"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "p122",
    "q": "Identify the way(s) an application can respond to an Event generated by the gs.eventQueue() method. a. Script Action b. Scheduled Script Execution (Scheduled Job) c. UI Policy d. Email Notification",
    "options": [
     {
      "k": "A",
      "t": "b and c"
     },
     {
      "k": "B",
      "t": "c"
     },
     {
      "k": "C",
      "t": "a and d"
     },
     {
      "k": "D",
      "t": "a and c"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "p123",
    "q": "When troubleshooting and debugging notifications, where do you navigate to see if an email was sent m response to an event?",
    "options": [
     {
      "k": "A",
      "t": "System Logs > Events"
     },
     {
      "k": "B",
      "t": "System Logs > Emails"
     },
     {
      "k": "C",
      "t": "System Logs > Push Notifications"
     },
     {
      "k": "D",
      "t": "System Logs > ICE Logs"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "p124",
    "q": "What are the benefits of storing the majority of an Application's server-side script logic in a Script Include? a. This makes execution faster. b. Only run when called from a script. c. The script logic can be hidden when the Application is installed from the ServiceNow Store. d. For some changes to application logic there is only one place to make edits.",
    "options": [
     {
      "k": "A",
      "t": "a, b, and d"
     },
     {
      "k": "B",
      "t": "a, b, c, and d"
     },
     {
      "k": "C",
      "t": "b, c, and d"
     },
     {
      "k": "D",
      "t": "a, b, and c"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "p125",
    "q": "Which of the following is NOT a Flow Designer feature?",
    "options": [
     {
      "k": "A",
      "t": "Run a flow from a Catalog item"
     },
     {
      "k": "B",
      "t": "Call a flow from another flow or subflow"
     },
     {
      "k": "C",
      "t": "Add stages to a flow"
     },
     {
      "k": "D",
      "t": "Test a flow using the \"Run as\" feature"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "p126",
    "q": "Topic 1 What is the purpose of the coalesce field when importing data?",
    "options": [
     {
      "k": "A",
      "t": "If a match is not found, the existing record is updated"
     },
     {
      "k": "B",
      "t": "To determine if a record matches an existing record or is a new record"
     },
     {
      "k": "C",
      "t": "To identify and merge duplicate records"
     },
     {
      "k": "D",
      "t": "When a match is found, a new record is inserted"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "p127",
    "q": "If you create a SOAP Message what syntax indicates a variable to pass when the function is called?",
    "options": [
     {
      "k": "A",
      "t": "current.variable_name"
     },
     {
      "k": "B",
      "t": "${variable_name}"
     },
     {
      "k": "C",
      "t": "< variable_name >.do?WSDL"
     },
     {
      "k": "D",
      "t": "< variable_name >"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "p128",
    "q": "Which of the following is NOT a way to install an application on a ServiceNow instance?",
    "options": [
     {
      "k": "A",
      "t": "Install an application from the Application Repository"
     },
     {
      "k": "B",
      "t": "Select the Copy button on the application record"
     },
     {
      "k": "C",
      "t": "Download and install an application from the ServiceNow Share web site"
     },
     {
      "k": "D",
      "t": "Download and install a third-party application from the ServiceNow Store"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "p129",
    "q": "Using Custom UI test step in Automated Test Framework, which of the following is NOT a testable page component?",
    "options": [
     {
      "k": "A",
      "t": "Buttons"
     },
     {
      "k": "B",
      "t": "UI controls"
     },
     {
      "k": "C",
      "t": "UI pages"
     },
     {
      "k": "D",
      "t": "Form field values"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "p130",
    "q": "Why create Applications in ServiceNow?\na) To replace outdated, inadequate, custom business applications and processes\nb) To extend service delivery and management to all enterprise departments\nc) To allow users full access to all ServiceNow tables, records, and fields\nd) To extend the value of ServiceNow",
    "options": [
     {
      "k": "A",
      "t": "a, b, and d"
     },
     {
      "k": "B",
      "t": "a, b, c, and d"
     },
     {
      "k": "C",
      "t": "a, b, and c"
     },
     {
      "k": "D",
      "t": "b, c, and d"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "p131",
    "q": "Flow Designer supports variable data types to store record data and complex data. Which of the following are supported variable data types? (Choose three.)",
    "options": [
     {
      "k": "A",
      "t": "Choice data type"
     },
     {
      "k": "B",
      "t": "Array.Reference data type"
     },
     {
      "k": "C",
      "t": "Integer data type"
     },
     {
      "k": "D",
      "t": "Freedom data type"
     },
     {
      "k": "E",
      "t": "Array.Boolean data type"
     },
     {
      "k": "F",
      "t": "Label data type"
     }
    ],
    "answer": [
     "B",
     "C",
     "D"
    ],
    "multi": true,
    "notes": "",
    "ref": []
   },
   {
    "id": "p132",
    "q": "Which of the following statements is true about Guided Application Creator?",
    "options": [
     {
      "k": "A",
      "t": "The global scope option is turned on by default"
     },
     {
      "k": "B",
      "t": "Default access controls are automatically created"
     },
     {
      "k": "C",
      "t": "The welcome screen appears every time a new application is created"
     },
     {
      "k": "D",
      "t": "A scoped application user role is automatically created"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "p133",
    "q": "What are the ways to designate data tables when using Guided Application Creator (GAC)? (Choose three.)",
    "options": [
     {
      "k": "A",
      "t": "Upload an existing PDF"
     },
     {
      "k": "B",
      "t": "Create a new table on the platform"
     },
     {
      "k": "C",
      "t": "Use a freeform database"
     },
     {
      "k": "D",
      "t": "Upload an existing spreadsheet"
     },
     {
      "k": "E",
      "t": "Use an existing table on the platform"
     },
     {
      "k": "F",
      "t": "Upload an existing word processing document"
     }
    ],
    "answer": [
     "B",
     "D",
     "E"
    ],
    "multi": true,
    "notes": "",
    "ref": []
   },
   {
    "id": "p134",
    "q": "What is the Event Registry?",
    "options": [
     {
      "k": "A",
      "t": "A Workflow which is launched every time an Event is generated; used to debug Events"
     },
     {
      "k": "B",
      "t": "The Event Log which lists all Events that have been generated"
     },
     {
      "k": "C",
      "t": "The method used in server side scripts to generate Events and pass parameters"
     },
     {
      "k": "D",
      "t": "A table containing a record for every Event known to the ServiceNow system which allows ServiceNow to react when Events are generated"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "p135",
    "q": "Identify the ways an application can respond to an Event generated by the gs.eventQueue() method: (Choose two.)",
    "options": [
     {
      "k": "A",
      "t": "Client Script"
     },
     {
      "k": "B",
      "t": "Email Notification"
     },
     {
      "k": "C",
      "t": "Scheduled Script Execution (Scheduled Job)"
     },
     {
      "k": "D",
      "t": "Script Action"
     },
     {
      "k": "E",
      "t": "UI Policy"
     }
    ],
    "answer": [
     "B",
     "D"
    ],
    "multi": true,
    "notes": "",
    "ref": []
   },
   {
    "id": "p136",
    "q": "Is it possible to change an application's scope?",
    "options": [
     {
      "k": "A",
      "t": "No, it's not possible"
     },
     {
      "k": "B",
      "t": "Yes, it's possible"
     },
     {
      "k": "C",
      "t": "Yes, but only from global scope to private scope"
     },
     {
      "k": "D",
      "t": "Yes, but only from private scope to global scope"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "p137",
    "q": "Topic 1 Which of the following is true about g_scratchpad? (Choose two.)                         Topic 1",
    "options": [
     {
      "k": "A",
      "t": "Used to push information from the server to the client"
     },
     {
      "k": "B",
      "t": "Does not exist on the mobile platform"
     },
     {
      "k": "C",
      "t": "Has constructors and methods"
     },
     {
      "k": "D",
      "t": "Has default properties passed by client-side scripts"
     }
    ],
    "answer": [
     "A",
     "B"
    ],
    "multi": true,
    "notes": "",
    "ref": []
   },
   {
    "id": "p138",
    "q": "Client-side scripts manage what?",
    "options": [
     {
      "k": "A",
      "t": "User access"
     },
     {
      "k": "B",
      "t": "Database and backend"
     },
     {
      "k": "C",
      "t": "Playbook access"
     },
     {
      "k": "D",
      "t": "Forms and Form Fields"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "p139",
    "q": "When debugging Email Notifications, what must you check on a user record? (Choose two.)",
    "options": [
     {
      "k": "A",
      "t": "Active must be true."
     },
     {
      "k": "B",
      "t": "The Email field must have a valid value."
     },
     {
      "k": "C",
      "t": "The user must not be locked out."
     },
     {
      "k": "D",
      "t": "The First name and Last name fields must have values."
     },
     {
      "k": "E",
      "t": "Delegation must be enabled."
     }
    ],
    "answer": [
     "A",
     "B"
    ],
    "multi": true,
    "notes": "",
    "ref": []
   },
   {
    "id": "p140",
    "q": "When crafting a scoped application that contains flow actions, what is the application called?",
    "options": [
     {
      "k": "A",
      "t": "Action"
     },
     {
      "k": "B",
      "t": "Spoke"
     },
     {
      "k": "C",
      "t": "Bundle"
     },
     {
      "k": "D",
      "t": "Flow"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "p141",
    "q": "Which are reasons an application could be developed on the ServiceNow platform? (Choose three.)",
    "options": [
     {
      "k": "A",
      "t": "It needs workflow to manage processes."
     },
     {
      "k": "B",
      "t": "It requires reporting capabilities."
     },
     {
      "k": "C",
      "t": "It uses forms extensively to interact with data."
     },
     {
      "k": "D",
      "t": "It requires low-level programming libraries."
     },
     {
      "k": "E",
      "t": "It uses multimedia features."
     }
    ],
    "answer": [
     "A",
     "B",
     "C"
    ],
    "multi": true,
    "notes": "",
    "ref": []
   },
   {
    "id": "p142",
    "q": "Once an application is ready to share, which of the following methods of publishing are supported by ServiceNow? (Choose three.)",
    "options": [
     {
      "k": "A",
      "t": "Publish to an application repository"
     },
     {
      "k": "B",
      "t": "Publish to a local drive"
     },
     {
      "k": "C",
      "t": "Publish to the ServiceNow Store"
     },
     {
      "k": "D",
      "t": "Publish to an Update Set"
     },
     {
      "k": "E",
      "t": "Publish to a spreadsheet"
     },
     {
      "k": "F",
      "t": "Publish to a local USB device"
     }
    ],
    "answer": [
     "A",
     "C",
     "D"
    ],
    "multi": true,
    "notes": "",
    "ref": []
   },
   {
    "id": "p143",
    "q": "Topic 1 What is required to link a ServiceNow application to a Git repository? (Choose three.)",
    "options": [
     {
      "k": "A",
      "t": "URI"
     },
     {
      "k": "B",
      "t": "ACL"
     },
     {
      "k": "C",
      "t": "Application name"
     },
     {
      "k": "D",
      "t": "Password"
     },
     {
      "k": "E",
      "t": "User name"
     },
     {
      "k": "F",
      "t": "URL"
     }
    ],
    "answer": [
     "A",
     "D",
     "E"
    ],
    "multi": true,
    "notes": "",
    "ref": []
   },
   {
    "id": "p144",
    "q": "What is the Endpoint when configuring a REST Message?",
    "options": [
     {
      "k": "A",
      "t": "The URI of the WebServer"
     },
     {
      "k": "B",
      "t": "The command to the REST script to stop execution"
     },
     {
      "k": "C",
      "t": "Tne URI of the data to be accessed, queried, or modified"
     },
     {
      "k": "D",
      "t": "The provider response indicates there is no data to send back"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "p145",
    "q": "Which client-side scripts apply to Record Producers? (Choose two.)",
    "options": [
     {
      "k": "A",
      "t": "Fix Scripts"
     },
     {
      "k": "B",
      "t": "Catalog Client Scripts"
     },
     {
      "k": "C",
      "t": "UI Scripts"
     },
     {
      "k": "D",
      "t": "Catalog UI Policies"
     },
     {
      "k": "E",
      "t": "Record Producer Polices"
     }
    ],
    "answer": [
     "B",
     "D"
    ],
    "multi": true,
    "notes": "",
    "ref": []
   },
   {
    "id": "p146",
    "q": "Which business requirements and process(es) should be documented as part of the application development plan? (Choose four.)",
    "options": [
     {
      "k": "A",
      "t": "Available licenses"
     },
     {
      "k": "B",
      "t": "Business problem"
     },
     {
      "k": "C",
      "t": "Process steps"
     },
     {
      "k": "D",
      "t": "Users/stakeholders"
     },
     {
      "k": "E",
      "t": "Database capacity"
     },
     {
      "k": "F",
      "t": "Project schedule"
     },
     {
      "k": "G",
      "t": "Data input/output"
     }
    ],
    "answer": [
     "B",
     "C",
     "D",
     "G"
    ],
    "multi": true,
    "notes": "",
    "ref": []
   },
   {
    "id": "p147",
    "q": "Which objects are used as part of the client-side scripting API? (Choose two.)",
    "options": [
     {
      "k": "A",
      "t": "gs"
     },
     {
      "k": "B",
      "t": "current ana previous"
     },
     {
      "k": "C",
      "t": "g_user"
     },
     {
      "k": "D",
      "t": "workflow.scratchpad"
     },
     {
      "k": "E",
      "t": "g_form"
     }
    ],
    "answer": [
     "C",
     "E"
    ],
    "multi": true,
    "notes": "",
    "ref": []
   },
   {
    "id": "p148",
    "q": "When creating application tables, a user role is automatically added to the table record. Which other role does an application typically have?",
    "options": [
     {
      "k": "A",
      "t": "Application Super User"
     },
     {
      "k": "B",
      "t": "Application Fulfiller"
     },
     {
      "k": "C",
      "t": "Application Admin"
     },
     {
      "k": "D",
      "t": "Application Manager"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "p149",
    "q": "Which determines the relationships between field in an Import Set table to field in an existing ServiceNow table?",
    "options": [
     {
      "k": "A",
      "t": "Data Sources"
     },
     {
      "k": "B",
      "t": "Schema Map Relationship Builder"
     },
     {
      "k": "C",
      "t": "Business Service Management Map"
     },
     {
      "k": "D",
      "t": "Transform Map"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": []
   },
   {
    "id": "p150",
    "q": "What data types of Flow Designer variables are supported to store record data and complex data? (Choose three.)",
    "options": [
     {
      "k": "A",
      "t": "Label data type"
     },
     {
      "k": "B",
      "t": "Integer"
     },
     {
      "k": "C",
      "t": "Array.Reference"
     },
     {
      "k": "D",
      "t": "Choice"
     },
     {
      "k": "E",
      "t": "String"
     }
    ],
    "answer": [
     "B",
     "C",
     "E"
    ],
    "multi": true,
    "notes": "",
    "ref": []
   },
   {
    "id": "p151",
    "q": "What are the features of Flow Designer? (Choose three.)",
    "options": [
     {
      "k": "A",
      "t": "Add stages to a flow."
     },
     {
      "k": "B",
      "t": "Call a flow from another flow or subflow."
     },
     {
      "k": "C",
      "t": "Test a flow using the \"Run as\" feature."
     },
     {
      "k": "D",
      "t": "Support Java Scripting code to test conditions that trigger the flow."
     },
     {
      "k": "E",
      "t": "Run a flow from a Catalog item."
     },
     {
      "k": "F",
      "t": "Perform form field data validation at client side."
     }
    ],
    "answer": [
     "A",
     "B",
     "C"
    ],
    "multi": true,
    "notes": "",
    "ref": []
   }
  ]
 }
];
