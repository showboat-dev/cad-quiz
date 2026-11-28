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
      "t": "Scoped",
      "zh": "具有作用域的"
     },
     {
      "k": "B",
      "t": "Anonymous",
      "zh": "匿名函数"
     },
     {
      "k": "C",
      "t": "Self-invoking",
      "zh": "自调用"
     },
     {
      "k": "D",
      "t": "Constructor",
      "zh": "构造函数"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "以下是 Business Rule 的脚本模板：(function executeRule (current, previous */null when async*/){ }) (current, previous); 这种 JavaScript 函数称为："
   },
   {
    "id": "x2",
    "q": "Which method call in client side returns true only if the currently logged in user has the catalog_admin role and in no other case?",
    "options": [
     {
      "k": "A",
      "t": "g_user.hasRole(‘catalog_admin’)",
      "zh": "g_user.hasRole(‘catalog_admin’)"
     },
     {
      "k": "B",
      "t": "g_user.hasRoleOnly(‘catalog_admin’)",
      "zh": "g_user.hasRoleOnly(‘catalog_admin’)"
     },
     {
      "k": "C",
      "t": "g_user.hasRoleExactly(‘catalog_admin’)",
      "zh": "g_user.hasRoleExactly(‘catalog_admin’)"
     },
     {
      "k": "D",
      "t": "g_user.hasRoleFromList(‘catalog_admin’)",
      "zh": "g_user.hasRoleFromList(‘catalog_admin’)"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "客户端中，只有当前登录用户拥有 catalog_admin 角色时才返回 true 的方法调用是哪一个？"
   },
   {
    "id": "x3",
    "q": "How many applications menus can an application have?",
    "options": [
     {
      "k": "A",
      "t": "As many as the application design requires",
      "zh": "与应用程序设计要求一样多"
     },
     {
      "k": "B",
      "t": "2, one for an application’s user modules and one for an application’s administrator modules",
      "zh": "2，一个用于应用程序的用户模块，一个用于应用程序的管理员模块"
     },
     {
      "k": "C",
      "t": "3, one for an application’s user modules, one for an application’s administrator modules, and one for the ServiceNow administrator’s modules",
      "zh": "3，一个用于应用程序的用户模块，一个用于应用程序的管理员模块，一个用于 ServiceNow 管理员模块"
     },
     {
      "k": "D",
      "t": "1, which is used for all application modules",
      "zh": "1，用于所有应用模块"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "一个应用程序可以有多少个应用程序菜单？"
   },
   {
    "id": "x4",
    "q": "Which of the following are configured in an Email Notification?",
    "options": [
     {
      "k": "A",
      "t": "When to send the notification",
      "zh": "何时发送通知"
     },
     {
      "k": "B",
      "t": "What content will be in the notification",
      "zh": "通知中包含哪些内容"
     },
     {
      "k": "C",
      "t": "How to send the notification",
      "zh": "如何发送通知"
     },
     {
      "k": "D",
      "t": "Who will receive the notification",
      "zh": "谁将收到通知"
     }
    ],
    "answer": [
     "A",
     "B",
     "D"
    ],
    "multi": true,
    "notes": "",
    "ref": [],
    "qZh": "电子邮件通知中配置了以下哪些内容？"
   },
   {
    "id": "x5",
    "q": "What is the maximum number of test cases that can be added to a suite in ATF ?",
    "options": [
     {
      "k": "A",
      "t": "The limit depends on the ServiceNow instance version",
      "zh": "限制取决于ServiceNow实例版本"
     },
     {
      "k": "B",
      "t": "The limit depends on the type of application - whether it is in global scope or custom scope and ServiceNow instance version",
      "zh": "限制取决于应用程序的类型 - 是在全局范围还是自定义范围以及 ServiceNow 实例版本"
     },
     {
      "k": "C",
      "t": "There is no such limit. You can have one suite with many test cases.",
      "zh": "没有这样的限制。您可以拥有一套包含许多测试用例的套件。"
     },
     {
      "k": "D",
      "t": "The limit depends on the ServiceNow instance version",
      "zh": "限制取决于ServiceNow实例版本"
     },
     {
      "k": "E",
      "t": "The limit depends on the type of application - whether it is in global scope or custom scope",
      "zh": "限制取决于应用程序的类型 - 是在全局范围还是自定义范围"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "ATF 套件中最多可以添加多少个测试用例？"
   },
   {
    "id": "x6",
    "q": "Which one of the following is true for a Script Include with a Protection Policy value of Protected?",
    "options": [
     {
      "k": "A",
      "t": "The Protection Policy is applied only if the application is downloaded from the ServiceNow App Store",
      "zh": "仅当从 ServiceNow App Store 下载应用程序时才应用保护策略"
     },
     {
      "k": "B",
      "t": "The Protection policy option can only be enabled by a user with the admin role",
      "zh": "保护策略选项只能由具有管理员角色的用户启用"
     },
     {
      "k": "C",
      "t": "Any user with the protected_edit role can see and edit the Script Include",
      "zh": "任何具有 protected_edit 角色的用户都可以查看和编辑脚本包含"
     },
     {
      "k": "D",
      "t": "The Protection Policy is applied only if the glide.app.apply_protection system property value is true",
      "zh": "仅当 glide.app.apply_protection 系统属性值为 true 时才应用保护策略"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "None: Allows anyone to read and edit this downloaded or installed script include.\nRead-only: Allows anyone to read values from this downloaded or installed script include. No one can change script values on the instance on which they download or install it.\nProtected: Provides intellectual property protection for application developers. Customers who download the script include cannot see the contents of the script field. The script is encrypted in memory to prevent unauthorized users from seeing it in plain text.",
    "ref": [],
    "qZh": "对于保护策略值为“受保护”的脚本包含，以下哪一项是正确的？",
    "notesZh": "None：允许任何人读取和编辑此下载或安装的脚本包含。\n只读：允许任何人从该下载或安装的脚本中读取值。任何人都无法更改下载或安装脚本的实例上的脚本值。\n受保护：为应用程序开发人员提供知识产权保护。下载脚本包含的客户无法看到脚本字段的内容。该脚本在内存中加密，以防止未经授权的用户以纯文本形式查看它。"
   },
   {
    "id": "x7",
    "q": "Which one of the following client-side scripts apply to Record Producers?",
    "options": [
     {
      "k": "A",
      "t": "UI Scripts and UI Actions",
      "zh": "UI 脚本和 UI 操作"
     },
     {
      "k": "B",
      "t": "Client Scripts and UI Policies",
      "zh": "Client 脚本和 UI 策略"
     },
     {
      "k": "C",
      "t": "UI Scripts and Record Producer Scripts",
      "zh": "UI 脚本和记录制作者脚本"
     },
     {
      "k": "D",
      "t": "Catalog Client Scripts and Catalog UI Policies",
      "zh": "Catalog 客户端脚本和目录 UI 策略"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "以下哪一项客户端脚本适用于唱片制作人？"
   },
   {
    "id": "x8",
    "q": "Which one of the following is true for a table with the \"Allow configuration\" Application Access option selected?",
    "options": [
     {
      "k": "A",
      "t": "Any user with the application’s user role can modify the application’s scripts",
      "zh": "任何具有应用程序用户角色的用户都可以修改应用程序的脚本"
     },
     {
      "k": "B",
      "t": "Only the in scope application’s scripts can create Business Rules for the table",
      "zh": "仅范围内应用程序的脚本可以为表创建业务规则"
     },
     {
      "k": "C",
      "t": "Out of scope applications can create Business Rules for the table",
      "zh": "超出范围的应用程序可以为表创建业务规则"
     },
     {
      "k": "D",
      "t": "Out of scope applications can add new tables to the scoped application",
      "zh": "超出范围的应用程序可以向范围内的应用程序添加新表"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "对于选择了“允许配置”应用程序访问选项的表，以下哪一项是正确的？"
   },
   {
    "id": "x9",
    "q": "What are some of the considerations to document as part of the business process?",
    "options": [
     {
      "k": "A",
      "t": "Business problem, data input/output, project schedule, and process steps",
      "zh": "业务问题、数据输入/输出、项目进度和流程步骤"
     },
     {
      "k": "B",
      "t": "Business problem, data input/output, users/stakeholders, and process steps",
      "zh": "业务问题、数据输入/输出、用户/利益相关者和流程步骤"
     },
     {
      "k": "C",
      "t": "Business problem, data input/output, users/stakeholders, and database capacity",
      "zh": "业务问题、数据输入/输出、用户/利益相关者、数据库容量"
     },
     {
      "k": "D",
      "t": "Business problem, users/stakeholders, available licenses, and database capacity",
      "zh": "业务问题、用户/利益相关者、可用许可证和数据库容量"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "#NAME?\n#NAME?\n-Users/stakeholders are “Who can trigger the process?”, “Who is approving it?”, “Who are the implementers?”, etc.\n-Process stepts can be anything. Usually it has approval, implementation, test. But it could also be “create a virtual machine on citrix”.",
    "ref": [],
    "qZh": "作为业务流程的一部分需要记录哪些注意事项？",
    "notesZh": "#NAME？\n＃姓名？\n- 用户/利益相关者是“谁可以触发该流程？”，“谁批准它？”，“谁是实施者？”等。\n- 流程步骤可以是任何内容。通常有批准、实施、测试。但也可能是“在 Citrix 上创建虚拟机”。"
   },
   {
    "id": "x10",
    "q": "Which Application Access configuration field(s) are NOT available if the Can read configuration field is NOT selected?",
    "options": [
     {
      "k": "A",
      "t": "Allow configuration",
      "zh": "允许配置"
     },
     {
      "k": "B",
      "t": "Can read does not affect the availability of other Application Access fields",
      "zh": "Can读取不影响其他应用程序访问字段的可用性"
     },
     {
      "k": "C",
      "t": "Can create, Can update, and Can delete",
      "zh": "可以创建、可以更新、可以删除"
     },
     {
      "k": "D",
      "t": "All access to this table via web services",
      "zh": "所有通过Web服务访问此表"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "如果未选择“可以读取配置”字段，哪些应用程序访问配置字段不可用？"
   },
   {
    "id": "x11",
    "q": "When creating a Utilities Script Include. Identify the step that does not belong.",
    "options": [
     {
      "k": "A",
      "t": "Script the function(s)",
      "zh": "编写函数脚本"
     },
     {
      "k": "B",
      "t": "Create a prototype object from the new class",
      "zh": "从新类创建原型对象"
     },
     {
      "k": "C",
      "t": "Identify the table",
      "zh": "识别表"
     },
     {
      "k": "D",
      "t": "Create a class",
      "zh": "创建一个类"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "创建实用程序脚本包含时。识别不属于的步骤。"
   },
   {
    "id": "x12",
    "q": "Which of the following statements does NOT apply when extending an existing table?",
    "options": [
     {
      "k": "A",
      "t": "You must script and configure all required behaviors",
      "zh": "您必须编写脚本并配置所有必需的行为"
     },
     {
      "k": "B",
      "t": "The new table inherits all of the fields from the parent table",
      "zh": "新表继承父表的所有字段"
     },
     {
      "k": "C",
      "t": "The new table inherits the functionality built into the parent table",
      "zh": "新表继承父表内置的功能"
     },
     {
      "k": "D",
      "t": "The parent table’s Access Controls are evaluated when determining access to the new table’s records and fields",
      "zh": "在确定对新表记录和字段的访问权限时评估父表的访问控制"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "Extending an existing ServiceNow table means the table you create will inherit the parent table’s columns as well as the table’s business logic.",
    "ref": [],
    "qZh": "扩展现有表时，以下哪项语句不适用？",
    "notesZh": "扩展现有的ServiceNow表意味着您创建的表将继承父表的列以及表的业务逻辑。"
   },
   {
    "id": "x13",
    "q": "The source control operation used to store local changes on an instance for later application is called a(n).",
    "options": [
     {
      "k": "A",
      "t": "Branch",
      "zh": "分支"
     },
     {
      "k": "B",
      "t": "Tag",
      "zh": "标签"
     },
     {
      "k": "C",
      "t": "Stash",
      "zh": "暂存"
     },
     {
      "k": "D",
      "t": "Update set",
      "zh": "更新集"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "用于存储实例上的本地更改以供以后应用程序的源代码控制操作称为a(n)。"
   },
   {
    "id": "x14",
    "q": "When configuring an Access Control rule which has no condition or script, which one of the following statements is NOT true?",
    "options": [
     {
      "k": "A",
      "t": "table.id will grant access to a specific record on the table",
      "zh": "table.id 将授予对表上特定记录的访问权限"
     },
     {
      "k": "B",
      "t": "table.field will grant access to a specific field in a record",
      "zh": "table.field 将授予对记录中特定字段的访问权限"
     },
     {
      "k": "C",
      "t": "table.*will grant access to every field in a record",
      "zh": "table.*将授予对记录中每个字段的访问权限"
     },
     {
      "k": "D",
      "t": "table.None will grant access to every record on the table",
      "zh": "table.None 将授予对表中每条记录的访问权限"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "配置没有条件或脚本的访问控制规则时，以下哪一项陈述不正确？"
   },
   {
    "id": "x15",
    "q": "Which one of the following is a list of Link types?",
    "options": [
     {
      "k": "A",
      "t": "Assessment, List of Records, Separator, Timeline Page",
      "zh": "Assessment、记录列表、分隔符、时间线页面"
     },
     {
      "k": "B",
      "t": "List of Records, Content Page, Order, URL (from arguments)",
      "zh": "记录列表、内容页面、顺序、URL（来自参数）"
     },
     {
      "k": "C",
      "t": "List of Records, Separator, Catalog Type, Roles",
      "zh": "记录列表、分隔符、目录类型、角色"
     },
     {
      "k": "D",
      "t": "Assessment, List of Records, Content Page, Roles",
      "zh": "Assessment、记录列表、内容页面、角色"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "以下哪一项是链接类型列表？"
   },
   {
    "id": "x16",
    "q": "What syntax is used in a Record Producer script to access values from Record Producer form fields?",
    "options": [
     {
      "k": "A",
      "t": "current.variable_name",
      "zh": "current.variable_name"
     },
     {
      "k": "B",
      "t": "current.field_name",
      "zh": "current.field_name"
     },
     {
      "k": "C",
      "t": "producer.variablename",
      "zh": "Producer.变量名"
     },
     {
      "k": "D",
      "t": "producer.field_name",
      "zh": "Producer.field_name"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "For record producers it should be producer.variablename. For catalog items it will be current.variablename.",
    "ref": [],
    "qZh": "记录制作者脚本中使用什么语法来访问记录制作者表单字段中的值？",
    "notesZh": "对于记录制作者来说，它应该是 Producer.variablename。对于目录项，它将是 current.variablename。"
   },
   {
    "id": "x17",
    "q": "Which of the following features are available to Global applications?",
    "options": [
     {
      "k": "A",
      "t": "Flow Designer",
      "zh": "Flow设计器"
     },
     {
      "k": "B",
      "t": "Automated Test Framework",
      "zh": "自动化测试框架"
     },
     {
      "k": "C",
      "t": "Source Control",
      "zh": "源代码管理"
     },
     {
      "k": "D",
      "t": "Delegated Development",
      "zh": "委托开发"
     }
    ],
    "answer": [
     "A",
     "B",
     "C"
    ],
    "multi": true,
    "notes": "",
    "ref": [],
    "qZh": "全局应用程序可以使用以下哪些功能？"
   },
   {
    "id": "x18",
    "q": "Which one of the following returns true if the currently logged in user has the admin role in a server side script?",
    "options": [
     {
      "k": "A",
      "t": "g_form.hasRole(‘admin’)",
      "zh": "g_form.hasRole(‘admin’)"
     },
     {
      "k": "B",
      "t": "gs.hasRole(‘admin’)",
      "zh": "gs.hasRole(‘admin’)"
     },
     {
      "k": "C",
      "t": "g_form.hasRoleExactly(‘admin’)",
      "zh": "g_form.hasRoleExactly(‘admin’)"
     },
     {
      "k": "D",
      "t": "gs.hasRoleExactly(‘admin’)",
      "zh": "gs.hasRoleExactly(‘admin’)"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "https://developer.servicenow.com/dev.do#!/reference/api/rome/server/no-namespace/c_GlideSystemScopedAPI#r_ScopedGlideSystemHasRole_Object",
    "ref": [],
    "qZh": "如果当前登录的用户在服务器端脚本中具有管理员角色，则以下哪一项返回 true？",
    "notesZh": "https://developer.servicenow.com/dev.do#!/reference/api/rome/server/no-namespace/c_GlideSystemScopedAPI#r_ScopedGlideSystemHasRole_Object"
   },
   {
    "id": "x19",
    "q": "Which one of the following is NOT required to link a ServiceNow application to a Git repository?",
    "options": [
     {
      "k": "A",
      "t": "URL",
      "zh": "URL"
     },
     {
      "k": "B",
      "t": "Username",
      "zh": "用户名"
     },
     {
      "k": "C",
      "t": "Password",
      "zh": "密码"
     },
     {
      "k": "D",
      "t": "Application name",
      "zh": "应用程序名称"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "将 ServiceNow 应用程序链接到 Git 存储库不需要以下哪一项？"
   },
   {
    "id": "x20",
    "q": "Application developers configure ServiceNow using industry standard JavaScript to…",
    "options": [
     {
      "k": "A",
      "t": "Extend and add functionality",
      "zh": "扩展和添加功能"
     },
     {
      "k": "B",
      "t": "Enable the right-click to edit the context menus on applications in the navigator",
      "zh": "启用右键单击以编辑导航器中应用程序的上下文菜单"
     },
     {
      "k": "C",
      "t": "Configure the outgoing email display name",
      "zh": "配置外发电子邮件显示名称"
     },
     {
      "k": "D",
      "t": "Customize the organization’s company logo and banner text",
      "zh": "自定义组织的公司徽标和横幅文本"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "应用程序开发人员使用行业标准 JavaScript 配置 ServiceNow..."
   },
   {
    "id": "x21",
    "q": "One of the uses of the ServiceNow REST API Explorer is:",
    "options": [
     {
      "k": "A",
      "t": "Practice using REST to interact with public data providers",
      "zh": "练习使用 REST 与公共数据提供者交互"
     },
     {
      "k": "B",
      "t": "Convert SOAP Message functions to REST methods",
      "zh": "将 SOAP 消息函数转换为 REST 方法"
     },
     {
      "k": "C",
      "t": "Create sample code for sending REST requests to ServiceNow",
      "zh": "创建用于向 ServiceNow 发送 REST 请求的示例代码"
     },
     {
      "k": "D",
      "t": "Find resources on the web for learning about REST",
      "zh": "在网络上查找资源以了解 REST"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "ServiceNow REST API Explorer 的用途之一是："
   },
   {
    "id": "x22",
    "q": "Which of the following are true for reports in ServiceNow? (3 options)",
    "options": [
     {
      "k": "A",
      "t": "Any user can see any report shared with them",
      "zh": "任何用户都可以查看与其共享的任何报告"
     },
     {
      "k": "B",
      "t": "All users can generate reports on any table.",
      "zh": "所有用户都可以在任何表上生成报告。"
     },
     {
      "k": "C",
      "t": "Can be scheduled to be run and distributed by email.",
      "zh": "可以安排运行并通过电子邮件分发。"
     },
     {
      "k": "D",
      "t": "Can be a graphical representation of data.",
      "zh": "可以是数据的图形表示。"
     },
     {
      "k": "E",
      "t": "Can be run on demand by authorized users.",
      "zh": "可以由授权用户按需运行。"
     }
    ],
    "answer": [
     "C",
     "D",
     "E"
    ],
    "multi": true,
    "notes": "",
    "ref": [],
    "qZh": "对于 ServiceNow 中的报告，以下哪一项是正确的？ （3个选项）"
   },
   {
    "id": "x23",
    "q": "In what order are ServiceNow Access Controls evaluated?",
    "options": [
     {
      "k": "A",
      "t": "field, table",
      "zh": "字段、表"
     },
     {
      "k": "B",
      "t": "table, field",
      "zh": "表、字段"
     },
     {
      "k": "C",
      "t": "table, record",
      "zh": "表，记录"
     },
     {
      "k": "D",
      "t": "record, field",
      "zh": "记录、字段"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "The ACL is executed in the below order:\nThe condition must evaluate to true.\nThe script must evaluate to true or return an answer variable with the value of true.\nThe user must have one of the roles in the required roles list. If the list is empty, this condition evaluates to true.\n[Record ACL rules only] The matching table-level and then field-level ACL rules must evaluate to true.",
    "ref": [],
    "qZh": "ServiceNow 访问控制按什么顺序评估？",
    "notesZh": "ACL按以下顺序执行：\n条件必须评估为真。\n该脚本必须求值为 true 或返回值为 true 的答案变量。\n用户必须具有所需角色列表中的角色之一。如果列表为空，则此条件评估为 true。\n[仅记录 ACL 规则] 匹配的表级 ACL 规则和字段级 ACL 规则的计算结果必须为 true。"
   },
   {
    "id": "x24",
    "q": "When working in the Form Designer, configuring the label of a field in a child table changes the label on which table(s)?",
    "options": [
     {
      "k": "A",
      "t": "child table",
      "zh": "child表"
     },
     {
      "k": "B",
      "t": "base table",
      "zh": "基表"
     },
     {
      "k": "C",
      "t": "parent table",
      "zh": "父表"
     },
     {
      "k": "D",
      "t": "all tables",
      "zh": "所有表"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "The label will be changed at the nearest base table level.\nFor example:\nParent: u_table_a\nChild: u_table_ab\nChild: u_table_abd\ninsert Label: 'my label'\nChild: u_table_abdc\nChild: u_table_abdce\nChild: u_table_etc\nModify: 'my label'\nChild: u_table_c\nIn this case, modifying \"my label' at u_table_etc is actually modifying the label at u_table_abd; which is the nearest base table of that dictionary.",
    "ref": [],
    "qZh": "在表单设计器中工作时，配置子表中字段的标签会更改哪个表上的标签？",
    "notesZh": "标签将在最近的基表级别更改。\n例如：\n父级：u_table_a\n孩子：u_table_ab\n子项：u_table_abd\n插入标签：“我的标签”\n子项：u_table_abdc\n子项：u_table_abdce\n子项：u_table_etc\n修改：'我的标签'\n孩子：u_table_c\n在这种情况下，修改 u_table_etc 处的“我的标签”实际上是修改 u_table_abd 处的标签；这是该字典最近的基表。"
   },
   {
    "id": "x25",
    "q": "Which Report Type(s) can be created by right-clicking on a column header in a table’s list?",
    "options": [
     {
      "k": "A",
      "t": "Bar Chart",
      "zh": "条形图"
     },
     {
      "k": "B",
      "t": "Bar Chart and Pie Chart",
      "zh": "条形图和饼图"
     },
     {
      "k": "C",
      "t": "Bar Chart, Pie Chart, and Histogram",
      "zh": "条形图、饼图和直方图"
     },
     {
      "k": "D",
      "t": "Bar Chart, Pie Chart, Histogram, and Line",
      "zh": "条形图、饼图、直方图和折线图"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "通过右键单击表列表中的列标题可以创建哪些报告类型？"
   },
   {
    "id": "x26",
    "q": "When configuring a REST Message, the Endpoint is:",
    "options": [
     {
      "k": "A",
      "t": "The commands to the REST script to stop execution",
      "zh": "REST脚本停止执行的命令"
     },
     {
      "k": "B",
      "t": "The URI of the data to be accessed, queried, or modified",
      "zh": "要访问、查询或修改的数据的URI"
     },
     {
      "k": "C",
      "t": "The response from the provider indicating there is no data to send back",
      "zh": "来自提供商的响应，表明没有数据要发回"
     },
     {
      "k": "D",
      "t": "Information about the format of the returned data",
      "zh": "返回数据格式信息"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "配置 REST 消息时，端点为："
   },
   {
    "id": "x27",
    "q": "Which objects can be used in Inbound Action scripts?",
    "options": [
     {
      "k": "A",
      "t": "current",
      "zh": "当前记录（current）"
     },
     {
      "k": "B",
      "t": "email",
      "zh": "邮件对象（email）"
     },
     {
      "k": "C",
      "t": "producer",
      "zh": "生产者"
     },
     {
      "k": "D",
      "t": "event",
      "zh": "事件对象（event）"
     },
     {
      "k": "E",
      "t": "previous",
      "zh": "上一个"
     }
    ],
    "answer": [
     "A",
     "B",
     "D"
    ],
    "multi": true,
    "notes": "",
    "ref": [],
    "qZh": "哪些对象可以在入站操作脚本中使用？"
   },
   {
    "id": "x28",
    "q": "Which of the following is NOT supported by Flow Designer?",
    "options": [
     {
      "k": "A",
      "t": "Test a flow with rollback",
      "zh": "测试带有回滚的流程"
     },
     {
      "k": "B",
      "t": "Run a flow from a MetricBase Trigger",
      "zh": "从 MetricBase 触发器运行流程"
     },
     {
      "k": "C",
      "t": "Use Delegated Developer",
      "zh": "使用委托开发者"
     },
     {
      "k": "D",
      "t": "Call a subflow from a flow",
      "zh": "从流中调用子流"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "Flow Designer 不支持以下哪一项？"
   },
   {
    "id": "x29",
    "q": "How should Application Access be configured to prevent all other private application scopes from creating configuration records on an application’s data tables?",
    "options": [
     {
      "k": "A",
      "t": "Set the Accessible from field value to This application scope only and de-select the Allow access to this table via web services option",
      "zh": "将“可访问自”字段值设置为“仅此应用程序范围”，并取消选择“允许通过 Web 服务访问此表”选项"
     },
     {
      "k": "B",
      "t": "Set the Accessible from field value to This application scope only",
      "zh": "将“可访问自”字段值设置为“仅限此应用程序范围”"
     },
     {
      "k": "C",
      "t": "Set the Accessible from field value to All application scopes and de-select the Can create option",
      "zh": "将“可访问自”字段值设置为“所有应用程序范围”并取消选择“可以创建”选项"
     },
     {
      "k": "D",
      "t": "You must create Access Controls to prevent all other application scopes from creating configuration records on an application’s data tables rather than using Application Access",
      "zh": "您必须创建访问控制以防止所有其他应用程序范围在应用程序的数据表上创建配置记录，而不是使用应用程序访问"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "应如何配置应用程序访问以防止所有其他私有应用程序范围在应用程序的数据表上创建配置记录？"
   },
   {
    "id": "x30",
    "q": "What are some of the benefits of extending an existing table such as the Task table when creating a new application?",
    "options": [
     {
      "k": "A",
      "t": "Existing logic from the parent table will be automatically applied to the new table.",
      "zh": "父表中的现有逻辑将自动应用于新表。"
     },
     {
      "k": "B",
      "t": "You can repurpose existing fields by simply changing the label",
      "zh": "您只需更改标签即可重新利用现有字段"
     },
     {
      "k": "C",
      "t": "All of the parent table records are copied to the new table.",
      "zh": "所有父表记录都复制到新表中。"
     },
     {
      "k": "D",
      "t": "Use existing fields with no modifications",
      "zh": "使用现有字段而不进行修改"
     }
    ],
    "answer": [
     "A",
     "B",
     "D"
    ],
    "multi": true,
    "notes": "Extending an existing ServiceNow table means the table you create will inherit the parent table’s columns as well as the table’s business logic.",
    "ref": [],
    "qZh": "创建新应用程序时扩展现有表（例如任务表）有哪些好处？",
    "notesZh": "扩展现有的ServiceNow表意味着您创建的表将继承父表的列以及表的业务逻辑。"
   },
   {
    "id": "x31",
    "q": "Which one of the following is the baseline behavior of a table in a privately-scoped application?",
    "options": [
     {
      "k": "A",
      "t": "Any Business Rule can read, write, delete, and update from the table",
      "zh": "任何业务规则都可以从表中读取、写入、删除和更新"
     },
     {
      "k": "B",
      "t": "Only artifacts in the table’s application can read from the table",
      "zh": "只有表应用程序中的工件可以从表中读取"
     },
     {
      "k": "C",
      "t": "All application scopes can read from the table",
      "zh": "所有应用范围均可从表中读取"
     },
     {
      "k": "D",
      "t": "The table and its data are not accessible using web services",
      "zh": "无法使用 Web 服务访问该表及其数据"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "When you create new or extend the table in private scope, table is accessible from All Application Scopes with following Application Access option checked:\n– Can Read",
    "ref": [],
    "qZh": "以下哪一项是私有范围应用程序中表的基线行为？",
    "notesZh": "当您在私有范围内创建新表或扩展表时，可以从所有应用程序范围访问表，并选中以下应用程序访问选项：\n– 可以阅读"
   },
   {
    "id": "x32",
    "q": "When configuring a module, what does the Override application menu roles configuration option do?",
    "options": [
     {
      "k": "A",
      "t": "Admin is given access to the module even if Access Controls would ordinarily prevent access",
      "zh": "Admin 仍有权访问该模块"
     },
     {
      "k": "B",
      "t": "Users with access to the application menu can see the module even if they don’t have the module role",
      "zh": "有权访问应用程序菜单的用户即使没有模块角色也可以看到该模块"
     },
     {
      "k": "C",
      "t": "Self-Service users can access the module even though they do not have roles",
      "zh": "自助服务用户即使没有角色也可以访问该模块"
     },
     {
      "k": "D",
      "t": "Users with the module role but without access to the application menu access the module",
      "zh": "具有模块角色但无权访问应用程序菜单的用户访问模块"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "配置模块时，覆盖应用程序菜单角色配置选项有什么作用？\n即使访问控制通常会阻止访问，"
   },
   {
    "id": "x33",
    "q": "Which one of the following is true for GlideUser (g_user) methods?",
    "options": [
     {
      "k": "A",
      "t": "Can be used in Business Rules, and Scripts Includes",
      "zh": "可用于业务规则和脚本包括"
     },
     {
      "k": "B",
      "t": "Can be used in Client Scripts, UI Policies, and UI Actions",
      "zh": "可用于客户端脚本、UI 策略和 UI 操作"
     },
     {
      "k": "C",
      "t": "Can be used in Client Scripts and UI Policies only",
      "zh": "只能在客户端脚本和 UI 策略中使用"
     },
     {
      "k": "D",
      "t": "Can be used in Business Rules only",
      "zh": "只能在业务规则中使用"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "对于 GlideUser (g_user) 方法，以下哪一项是正确的？"
   },
   {
    "id": "x34",
    "q": "From the list below, identify one reason an application might NOT be a good fit with ServiceNow.",
    "options": [
     {
      "k": "A",
      "t": "Needs workflow to manage processes",
      "zh": "需要工作流程来管理流程"
     },
     {
      "k": "B",
      "t": "Uses forms extensively to interact with data",
      "zh": "广泛使用表单与数据交互"
     },
     {
      "k": "C",
      "t": "Requires reporting capabilities",
      "zh": "需要报告功能"
     },
     {
      "k": "D",
      "t": "Requires \"as-is\" use of low-level programming libraries",
      "zh": "需要“按原样”使用低级编程库"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "从下面的列表中，找出应用程序可能不适合 ServiceNow 的一个原因。"
   },
   {
    "id": "x35",
    "q": "Which of the following writes a message to the system log but NOT to the syslog table unless debug has been activated?",
    "options": [
     {
      "k": "A",
      "t": "gs.log(\"Hello World\");",
      "zh": "gs.log(\"你好世界\");"
     },
     {
      "k": "B",
      "t": "gs.print(\"Hello World\");",
      "zh": "gs.print(\"你好世界\");"
     },
     {
      "k": "C",
      "t": "gs.info(\"Hello World\");",
      "zh": "gs.info(\"你好世界\");"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "除非已激活调试，否则以下哪项将消息写入系统日志，但不会写入系统日志表？"
   },
   {
    "id": "x36",
    "q": "Which of the following methods prints a message on a blue background to the top of the current form by default?",
    "options": [
     {
      "k": "A",
      "t": "g_form.addInfoMessage()",
      "zh": "g_form.addInfoMessage()"
     },
     {
      "k": "B",
      "t": "g_form.showFieldMsg()",
      "zh": "g_form.showFieldMsg()"
     },
     {
      "k": "C",
      "t": "g_form.addInfoMsg()",
      "zh": "g_form.addInfoMsg()"
     },
     {
      "k": "D",
      "t": "g_form.showFieldMessage()",
      "zh": "g_form.showFieldMessage()"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "默认情况下，以下哪种方法会在当前表单的顶部打印一条蓝色背景的消息？"
   },
   {
    "id": "x37",
    "q": "Which one of the following is NOT a UI Action type?",
    "options": [
     {
      "k": "A",
      "t": "Form choice",
      "zh": "Form选择"
     },
     {
      "k": "B",
      "t": "Form button",
      "zh": "Form按钮"
     },
     {
      "k": "C",
      "t": "List choice",
      "zh": "列表选择"
     },
     {
      "k": "D",
      "t": "List banner button",
      "zh": "List 横幅按钮"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "以下哪一项不是 UI 操作类型？"
   },
   {
    "id": "x38",
    "q": "Which one of the following is NOT a debugging strategy for client-side scripts?",
    "options": [
     {
      "k": "A",
      "t": "Field Watcher",
      "zh": "现场观察者"
     },
     {
      "k": "B",
      "t": "g_form.addInfoMessage()",
      "zh": "g_form.addInfoMessage()"
     },
     {
      "k": "C",
      "t": "jslog()",
      "zh": "jslog()"
     },
     {
      "k": "D",
      "t": "gs.log()",
      "zh": "gs.log()"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "以下哪一项不是客户端脚本的调试策略？"
   },
   {
    "id": "x39",
    "q": "Which objects can you use in a Scheduled Script Execution (Scheduled Job) script?",
    "options": [
     {
      "k": "A",
      "t": "GlideSystem and current",
      "zh": "GlideSystem 和当前"
     },
     {
      "k": "B",
      "t": "GlideSystem and GlideRecord",
      "zh": "GlideSystem 和 GlideRecord"
     },
     {
      "k": "C",
      "t": "GlideUser and GlideRecord",
      "zh": "GlideUser 和 GlideRecord"
     },
     {
      "k": "D",
      "t": "GlideRecord and current",
      "zh": "GlideRecord 和当前"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "可以在计划脚本执行（计划作业）脚本中使用哪些对象？"
   },
   {
    "id": "x40",
    "q": "Which source control operation is available from BOTH Studio and the Git Repository?",
    "options": [
     {
      "k": "A",
      "t": "Switch Branch",
      "zh": "Switch分支"
     },
     {
      "k": "B",
      "t": "Stash Local Changes",
      "zh": "Stash 本地更改"
     },
     {
      "k": "C",
      "t": "Create Branch",
      "zh": "创建分支"
     },
     {
      "k": "D",
      "t": "Commit Changes",
      "zh": "Commit 更改"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "Studio 和 Git 存储库都提供哪些源代码控制操作？"
   },
   {
    "id": "x41",
    "q": "Which of the following statements is true for the Form Designer? (3 options)",
    "options": [
     {
      "k": "A",
      "t": "To remove a field from the form layout, hover over the field to enable the Action buttons, and select the Delete (X) button.",
      "zh": "要从表单布局中删除字段，请将鼠标悬停在该字段上以启用操作按钮，然后选择删除 (X) 按钮。"
     },
     {
      "k": "B",
      "t": "To create a new field on a form’s table, drag the appropriate data type from the Field Types tab to the form and then configure the new field",
      "zh": "要在表单的表格上创建新字段，请将适当的数据类型从“字段类型”选项卡拖动到表单，然后配置新字段"
     },
     {
      "k": "C",
      "t": "To add a field to the form layout, drag the field from the Fields tab to the desired destination on the form.",
      "zh": "要将字段添加到表单布局，请将字段从“字段”选项卡拖动到表单上的所需目标位置。"
     },
     {
      "k": "D",
      "t": "To add a section to the form layout, drag it from the Field Types tab to the desired destination on the form.",
      "zh": "要将一个部分添加到表单布局，请将其从“字段类型”选项卡拖动到表单上的所需目标位置。"
     }
    ],
    "answer": [
     "A",
     "B",
     "C"
    ],
    "multi": true,
    "notes": "https://docs.servicenow.com/en-US/bundle/tokyo-platform-administration/page/administer/form-administration/concept/c_FormDesign.html",
    "ref": [],
    "qZh": "对于表单设计器，以下哪项陈述是正确的？ （3个选项）",
    "notesZh": "https://docs.servicenow.com/en-US/bundle/tokyo-platform-administration/page/administer/form-administration/concept/c_FormDesign.html"
   },
   {
    "id": "x42",
    "q": "Which platform feature can be used to determine the relationships between field in an Import Set table to field in an existing ServiceNow table?",
    "options": [
     {
      "k": "A",
      "t": "Transform Map",
      "zh": "变换贴图"
     },
     {
      "k": "B",
      "t": "Cl Relationship Builder",
      "zh": "Cl 关系生成器"
     },
     {
      "k": "C",
      "t": "Data Sources",
      "zh": "数据源"
     },
     {
      "k": "D",
      "t": "Business Service Management Map",
      "zh": "业务服务管理地图"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "哪个平台功能可用于确定导入集表中的字段与现有 ServiceNow 表中的字段之间的关系？"
   },
   {
    "id": "x43",
    "q": "A scoped application containing Flow Designer content dedicated to a particular application is called a(n):",
    "options": [
     {
      "k": "A",
      "t": "Bundle",
      "zh": "应用包"
     },
     {
      "k": "B",
      "t": "Spoke",
      "zh": "集成功能包（Spoke）"
     },
     {
      "k": "C",
      "t": "Action",
      "zh": "动作"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "A 范围内的应用程序包含专用于特定应用程序的 Flow Designer 内容，称为 a(n)："
   },
   {
    "id": "x44",
    "q": "Which of the following CANNOT be debugged using the Field Watcher?",
    "options": [
     {
      "k": "A",
      "t": "Client Scripts",
      "zh": "Client 脚本"
     },
     {
      "k": "B",
      "t": "Business Rules",
      "zh": "业务规则"
     },
     {
      "k": "C",
      "t": "Access Controls",
      "zh": "访问控制"
     },
     {
      "k": "D",
      "t": "Script Includes",
      "zh": "Script 包括"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "以下哪一项不能使用现场观察器进行调试？"
   },
   {
    "id": "x45",
    "q": "How to see what scripts, reports, and other application artifacts will be present in a published application:",
    "options": [
     {
      "k": "A",
      "t": "Open the list of Update Sets for the instance",
      "zh": "打开实例的更新集列表"
     },
     {
      "k": "B",
      "t": "Examine the Application Files Related List in the application to be published",
      "zh": "检查要发布的应用程序中的应用程序文件相关列表"
     },
     {
      "k": "C",
      "t": "Open the artifact records individually to verify the value in the Application field",
      "zh": "单独打开工件记录以验证“应用程序”字段中的值"
     },
     {
      "k": "D",
      "t": "Enter the name of the Application in the Global search field",
      "zh": "在全局搜索字段中输入应用程序的名称"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "如何查看已发布的应用程序中将出现哪些脚本、报告和其他应用程序工件："
   },
   {
    "id": "x46",
    "q": "Which one of the following is true regarding Application Scope?",
    "options": [
     {
      "k": "A",
      "t": "Any developer can edit any application",
      "zh": "任何开发人员都可以编辑任何应用程序"
     },
     {
      "k": "B",
      "t": "All applications are automatically part of the Global scope",
      "zh": "所有应用程序自动成为全局范围的一部分"
     },
     {
      "k": "C",
      "t": "Developers can choose the prefix for a scope’s namespace",
      "zh": "开发人员可以选择范围命名空间的前缀"
     },
     {
      "k": "D",
      "t": "Applications downloaded from 3rd party ServiceNow application developers cannot have naming conflicts",
      "zh": "从第 3 方 ServiceNow 应用程序开发人员下载的应用程序不能出现命名冲突"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "关于应用范围，以下哪一项是正确的？"
   },
   {
    "id": "x47",
    "q": "What is a Module?",
    "options": [
     {
      "k": "A",
      "t": "A way of helping users quickly access information and services by filtering the items in the Application Navigator",
      "zh": "A 通过过滤 Application Navigator 中的项目来帮助用户快速访问信息和服务的方法"
     },
     {
      "k": "B",
      "t": "The functionality within an application menu such as opening a page in the content frame or a separate tab or window",
      "zh": "应用程序菜单中的功能，例如在内容框架中打开页面或单独的选项卡或窗口"
     },
     {
      "k": "C",
      "t": "A group of menus, or pages, providing related information and functionality to end-users",
      "zh": "A 菜单或页面组，向最终用户提供相关信息和功能"
     },
     {
      "k": "D",
      "t": "A web-based way of providing software to end-users",
      "zh": "A 基于 Web 的向最终用户提供软件的方式"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "什么是模块？"
   },
   {
    "id": "x48",
    "q": "Which one of the following is part of the client-side scripting API?",
    "options": [
     {
      "k": "A",
      "t": "workflow.scratchpad",
      "zh": "workflow.scratchpad"
     },
     {
      "k": "B",
      "t": "GlideUser object (g_user)",
      "zh": "GlideUser对象（g_user）"
     },
     {
      "k": "C",
      "t": "GlideSystem object (gs)",
      "zh": "GlideSystem 对象 (gs)"
     },
     {
      "k": "D",
      "t": "current and previous objects",
      "zh": "当前和以前的对象"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "以下哪一项是客户端脚本 API 的一部分？"
   },
   {
    "id": "x49",
    "q": "If the Create module field is selected when creating a table, what is the new module’s default behavior?",
    "options": [
     {
      "k": "A",
      "t": "Display a list of all records from the table",
      "zh": "显示表中所有记录的列表"
     },
     {
      "k": "B",
      "t": "Open a link to a wiki article with instructions on how to customize the behavior of the new module",
      "zh": "打开 wiki 文章的链接，其中包含有关如何自定义新模块行为的说明"
     },
     {
      "k": "C",
      "t": "Open an empty form so new records can be created",
      "zh": "打开一个空表单，以便创建新记录"
     },
     {
      "k": "D",
      "t": "Display an empty homepage for the application",
      "zh": "显示应用程序的空主页"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "如果创建表时选择“创建模块”字段，则新模块的默认行为是什么？"
   },
   {
    "id": "x50",
    "q": "Which one of the following is NOT a method used for logging messages in a server-side script for a privately-scoped application?",
    "options": [
     {
      "k": "A",
      "t": "gs.log()",
      "zh": "gs.log()"
     },
     {
      "k": "B",
      "t": "gs.error()",
      "zh": "gs.error()"
     },
     {
      "k": "C",
      "t": "gs.debug()",
      "zh": "gs.debug()"
     },
     {
      "k": "D",
      "t": "gs.warn()",
      "zh": "gs.warn()"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "以下哪一项不是用于在私有范围应用程序的服务器端脚本中记录消息的方法？"
   },
   {
    "id": "x51",
    "q": "Which one of the following is true?",
    "options": [
     {
      "k": "A",
      "t": "A UI Policy’s Actions execute before the UI Policy’s Scripts",
      "zh": "A UI 策略的操作在 UI 策略的脚本之前执行"
     },
     {
      "k": "B",
      "t": "A UI Policy’s Scripts execute before the UI Policy’s Actions",
      "zh": "A UI 策略的脚本在 UI 策略的操作之前执行"
     },
     {
      "k": "C",
      "t": "The execution order for a UI Policy’s Scripts and Actions is determined at runtime",
      "zh": "UI 策略的脚本和操作的执行顺序在运行时确定"
     },
     {
      "k": "D",
      "t": "A UI Policy’s Actions and Scripts execute at the same time",
      "zh": "A UI策略的操作和脚本同时执行"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "General Order:\n#NAME?\n#NAME?\n#NAME?\n#NAME?",
    "ref": [],
    "qZh": "以下哪一项是正确的？",
    "notesZh": "一般订单：\n#名字？\n＃姓名？\n＃姓名？\n＃姓名？"
   },
   {
    "id": "x52",
    "q": "When a ServiceNow instance requests information from a web service, ServiceNow is the web service:",
    "options": [
     {
      "k": "A",
      "t": "Specialist",
      "zh": "专家"
     },
     {
      "k": "B",
      "t": "Consumer",
      "zh": "服务消费者"
     },
     {
      "k": "C",
      "t": "Publisher",
      "zh": "发布者"
     },
     {
      "k": "D",
      "t": "Provider",
      "zh": "服务提供者"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "当ServiceNow实例向Web服务请求信息时，ServiceNow是Web服务："
   },
   {
    "id": "x53",
    "q": "Which of the following methods are useful in Access Control scripts?",
    "options": [
     {
      "k": "A",
      "t": "gs.hasRole() and current.isNew()",
      "zh": "gs.hasRole() 和 current.isNew()"
     },
     {
      "k": "B",
      "t": "gs.hasRole() and current.isNewRecord()",
      "zh": "gs.hasRole() 和 current.isNewRecord()"
     },
     {
      "k": "C",
      "t": "g_user.hasRole() and current.isNew()",
      "zh": "g_user.hasRole() 和 current.isNew()"
     },
     {
      "k": "D",
      "t": "g_user.hasRole() and current.isNewRecord()",
      "zh": "g_user.hasRole() 和 current.isNewRecord()"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "以下哪些方法在访问控制脚本中有用？"
   },
   {
    "id": "x54",
    "q": "Which one of the following is NOT a purpose of application scoping?",
    "options": [
     {
      "k": "A",
      "t": "Provide a way of tracking the user who developed an application",
      "zh": "提供一种跟踪开发应用程序的用户的方法"
     },
     {
      "k": "B",
      "t": "Provide a relationship between application artifacts",
      "zh": "提供应用程序工件之间的关系"
     },
     {
      "k": "C",
      "t": "Provide a namespace (prefix and scope name) to prevent cross application name collisions",
      "zh": "提供命名空间（前缀和范围名称）以防止跨应用程序名称冲突"
     },
     {
      "k": "D",
      "t": "Provide controls for how scripts from another scope can alter tables in a scoped application",
      "zh": "提供对来自另一个作用域的脚本如何更改作用域应用程序中的表的控制"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "以下哪一项不是应用程序范围界定的目的？"
   },
   {
    "id": "x55",
    "q": "When creating new application files in a scoped application, cross scope access is turned on by default in which of the following?",
    "options": [
     {
      "k": "A",
      "t": "Script Include",
      "zh": "Script 包含"
     },
     {
      "k": "B",
      "t": "REST messages",
      "zh": "REST消息"
     },
     {
      "k": "C",
      "t": "Table",
      "zh": "表"
     },
     {
      "k": "D",
      "t": "Workflow",
      "zh": "工作流程"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "在作用域应用程序中创建新应用程序文件时，默认情况下在以下哪一项中打开跨作用域访问？"
   },
   {
    "id": "x56",
    "q": "Which of the following objects does a Display Business Rule NOT have access to?",
    "options": [
     {
      "k": "A",
      "t": "g_scratchpad",
      "zh": "g_scratchpad"
     },
     {
      "k": "B",
      "t": "GlideSystem",
      "zh": "GlideSystem"
     },
     {
      "k": "C",
      "t": "current",
      "zh": "当前记录（current）"
     },
     {
      "k": "D",
      "t": "previous",
      "zh": "上一个"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "显示业务规则无权访问以下哪些对象？"
   },
   {
    "id": "x57",
    "q": "Which roles grant access to source control repository operations such as importing applications from source control, or linking an application to source control?",
    "options": [
     {
      "k": "A",
      "t": "admin",
      "zh": "管理员"
     },
     {
      "k": "B",
      "t": "source_control",
      "zh": "source_control"
     },
     {
      "k": "C",
      "t": "git_admin",
      "zh": "git_admin"
     },
     {
      "k": "D",
      "t": "source_control_admin",
      "zh": "source_control_admin"
     }
    ],
    "answer": [
     "A",
     "B"
    ],
    "multi": true,
    "notes": "PLEASE NOTE!!! Since Tokyo release the correct answer will be only admin, but on the exam the question is outdated and it requires two answers which are admin and source control.",
    "ref": [],
    "qZh": "哪些角色授予对源代码控制存储库操作的访问权限，例如从源代码控制导入应用程序或将应用程序链接到源代码控制？",
    "notesZh": "请注意！！！由于东京发布的正确答案只有“admin”，但在考试中，该问题已过时，需要两个答案：“admin”和“源代码控制”。"
   },
   {
    "id": "x58",
    "q": "Which one of the following is NOT true for the Weight field?",
    "options": [
     {
      "k": "A",
      "t": "The Weight value defaults to zero",
      "zh": "权重值默认为零"
     },
     {
      "k": "B",
      "t": "A Weight value of zero means that no email should be sent",
      "zh": "A 权重值为零表示不应发送电子邮件"
     },
     {
      "k": "C",
      "t": "Only Notifications with the highest weight for the same record and recipients are sent",
      "zh": "仅发送同一记录和收件人具有最高权重的通知"
     },
     {
      "k": "D",
      "t": "A Weight value of zero means the Notification is always sent when the Notification’s When to send criteria is met",
      "zh": "A 权重值为零表示满足通知的发送时间条件时始终发送通知"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "对于“重量”字段，以下哪一项不正确？"
   },
   {
    "id": "x59",
    "q": "How do I make my accept solution widget conditional on page load in Service Portal ?",
    "options": [
     {
      "k": "A",
      "t": "Use ngApp",
      "zh": "使用ngApp"
     },
     {
      "k": "B",
      "t": "Use ngShow",
      "zh": "使用ngShow"
     },
     {
      "k": "C",
      "t": "Use ng-if",
      "zh": "使用 ng-if"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "如何使我的接受解决方案小部件以服务门户中的页面加载为条件？"
   },
   {
    "id": "x60",
    "q": "Which one of the following is the fastest way to create and configure a Record Producer?",
    "options": [
     {
      "k": "A",
      "t": "Use the Record Producer module then add and configure all variables manually",
      "zh": "使用记录生成器模块，然后手动添加和配置所有变量"
     },
     {
      "k": "B",
      "t": "Open the table in the Table records and select the Add to Service Catalog Related Link",
      "zh": "打开表记录中的表并选择添加到服务目录相关链接"
     },
     {
      "k": "C",
      "t": "Create a Catalog Category, open the category, and select the Add New Record Producer button",
      "zh": "创建目录类别，打开类别，然后选择添加新记录生成器按钮"
     },
     {
      "k": "D",
      "t": "Open the table’s form, right-click on the form header, and select the Create Record Producer menu item",
      "zh": "打开表的窗体，右键单击窗体标题，然后选择“创建记录生成器”菜单项"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "以下哪一项是创建和配置记录生成器的最快方法？"
   },
   {
    "id": "x61",
    "q": "Which of the following is NOT a trigger type in Flow Designer?",
    "options": [
     {
      "k": "A",
      "t": "Schedule/Dates",
      "zh": "日程/日期"
     },
     {
      "k": "B",
      "t": "Application",
      "zh": "应用程序"
     },
     {
      "k": "C",
      "t": "Outbound Email",
      "zh": "出站电子邮件"
     },
     {
      "k": "D",
      "t": "Record",
      "zh": "记录"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "以下哪一项不是流程设计器中的触发器类型？"
   },
   {
    "id": "x62",
    "q": "Which of the following function is NOT available in the ServiceNow REST API?",
    "options": [
     {
      "k": "A",
      "t": "PATCH",
      "zh": "部分更新（PATCH）"
     },
     {
      "k": "B",
      "t": "COPY",
      "zh": "复制（COPY）"
     },
     {
      "k": "C",
      "t": "DELETE",
      "zh": "删除（DELETE）"
     },
     {
      "k": "D",
      "t": "POST",
      "zh": "提交（POST）"
     },
     {
      "k": "E",
      "t": "GET",
      "zh": "获取（GET）"
     },
     {
      "k": "F",
      "t": "PUT",
      "zh": "替换（PUT）"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "以下哪项功能在 ServiceNow REST API 中不可用？"
   },
   {
    "id": "x63",
    "q": "Which of the following scripts do not always run on the server side?",
    "options": [
     {
      "k": "A",
      "t": "Script Includes",
      "zh": "Script 包括"
     },
     {
      "k": "B",
      "t": "Business Rule",
      "zh": "业务规则"
     },
     {
      "k": "C",
      "t": "Script Action",
      "zh": "脚本动作"
     },
     {
      "k": "D",
      "t": "UI Action",
      "zh": "UI 操作"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "For using UI Action as server and client both, there is a check box named as client, tick that one and then in your script you can write client side code and a function named as gsftSubmit() is used to call server end and after that you can put server side code.\nBelow link will help you to understand more!!\nhttps://www.servicenowguru.com/system-ui/ui-actions-system-ui/client-server-code-ui-action/\nAlso there is one out of the box UI Action named as 'Reopen Incident' used as both client and server side, you can go through it.",
    "ref": [],
    "qZh": "以下哪个脚本并不总是在服务器端运行？",
    "notesZh": "对于使用 UI Action 作为服务器和客户端，有一个名为客户端的复选框，勾选该复选框，然后在脚本中您可以编写客户端代码，并使用名为 gsftSubmit() 的函数来调用服务器端，之后您可以放置服务器端代码。\n下面的链接将帮助您了解更多！\nhttps://www.servicenowguru.com/system-ui/ui-actions-system-ui/client-server-code-ui-action/\n还有一个名为“Reopen Incident”的开箱即用 UI 操作，可用作客户端和服务器端，您可以通过它。"
   },
   {
    "id": "x64",
    "q": "In Form Designer, when you edit the label of a field on a child table, the label is updated on?",
    "options": [
     {
      "k": "A",
      "t": "Parent table",
      "zh": "父表"
     },
     {
      "k": "B",
      "t": "Base table",
      "zh": "基表"
     },
     {
      "k": "C",
      "t": "All tables",
      "zh": "所有表"
     },
     {
      "k": "D",
      "t": "Child table",
      "zh": "子表"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "在表单设计器中，当您编辑子表上的字段标签时，标签更新在？"
   },
   {
    "id": "x65",
    "q": "Which of the following actions is not supported by Studio?",
    "options": [
     {
      "k": "A",
      "t": "Enable context menu options to modify data",
      "zh": "启用上下文菜单选项来修改数据"
     },
     {
      "k": "B",
      "t": "Download only the required session logs.",
      "zh": "仅下载所需的会话日志。"
     },
     {
      "k": "C",
      "t": "Format code indentation with JS Beautify",
      "zh": "用JS Beautify格式化代码缩进"
     },
     {
      "k": "D",
      "t": "Integrate with source control",
      "zh": "与源代码管理集成"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "https://docs.servicenow.com/en-US/bundle/tokyo-application-development/page/build/applications/concept/c_ServiceNowStudio.html",
    "ref": [],
    "qZh": "Studio 不支持以下哪项操作？",
    "notesZh": "https://docs.servicenow.com/en-US/bundle/tokyo-application-development/page/build/applications/concept/c_ServiceNowStudio.html"
   },
   {
    "id": "x66",
    "q": "An application has a table named MyTable with the following three fields: field1, field2, field3. Table.none is set for READ for the Admin and Itil roles. Table.field3 is set for the READ by the Admin role only. What with the Itil role be able to read? (select one)",
    "options": [
     {
      "k": "A",
      "t": "field2, field3",
      "zh": "field2、field3"
     },
     {
      "k": "B",
      "t": "field1, field3",
      "zh": "field1、field3"
     },
     {
      "k": "C",
      "t": "field1, field2",
      "zh": "field1、field2"
     },
     {
      "k": "D",
      "t": "field1, field2, field3",
      "zh": "field1、field2、field3"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "应用程序有一个名为 MyTable 的表，其中包含以下三个字段：field1、field2、field3。 Table.none 设置为 Admin 和 Itil 角色的 READ。 Table.field3 仅由管理员角色设置为 READ。用 Itil 可以读取什么角色？ （选择一项）"
   },
   {
    "id": "x67",
    "q": "You are writing an Async Business Rule for a table in a different scope than the Business Rule record. Which one of the following database operations CANNOT be part of the Async Business Rule's configuration?",
    "options": [
     {
      "k": "A",
      "t": "Delete",
      "zh": "删除"
     },
     {
      "k": "B",
      "t": "Update",
      "zh": "更新"
     },
     {
      "k": "C",
      "t": "Insert",
      "zh": "插入"
     },
     {
      "k": "D",
      "t": "Query",
      "zh": "查询"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "您正在为与业务规则记录不同范围的表编写异步业务规则。以下哪一项数据库操作不能成为异步业务规则配置的一部分？"
   },
   {
    "id": "x68",
    "q": "What debugging method you use in the server side scripting in a scoped application?",
    "options": [
     {
      "k": "A",
      "t": "gs.log()",
      "zh": "gs.log()"
     },
     {
      "k": "B",
      "t": "gs.debuglog()",
      "zh": "gs.debuglog()"
     },
     {
      "k": "C",
      "t": "gs.addInfoMessage()",
      "zh": "gs.addInfoMessage()"
     },
     {
      "k": "D",
      "t": "gs.info()",
      "zh": "gs.info()"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "在作用域应用程序的服务器端脚本中使用什么调试方法？"
   },
   {
    "id": "x69",
    "q": "How is access to Application menus and modules controlled?",
    "options": [
     {
      "k": "A",
      "t": "Client Scripts",
      "zh": "Client 脚本"
     },
     {
      "k": "B",
      "t": "Roles",
      "zh": "角色"
     },
     {
      "k": "C",
      "t": "Application Rules",
      "zh": "应用规则"
     },
     {
      "k": "D",
      "t": "Access controls",
      "zh": "访问控制"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "如何控制对应用程序菜单和模块的访问？"
   },
   {
    "id": "x70",
    "q": "Which of the following are steps in the generalized process for working with events?",
    "options": [
     {
      "k": "A",
      "t": "Write a Business Rule",
      "zh": "编写业务规则"
     },
     {
      "k": "B",
      "t": "Generate the event",
      "zh": "生成事件"
     },
     {
      "k": "C",
      "t": "Add an event to the Event Registry",
      "zh": "将事件添加到事件注册表"
     },
     {
      "k": "D",
      "t": "Respond to the event",
      "zh": "响应事件"
     },
     {
      "k": "E",
      "t": "Create a Scheduled Script Execution",
      "zh": "创建计划脚本执行"
     }
    ],
    "answer": [
     "B",
     "C",
     "D"
    ],
    "multi": true,
    "notes": "",
    "ref": [],
    "qZh": "以下哪些是处理事件的通用流程中的步骤？"
   },
   {
    "id": "x71",
    "q": "How are flow variables access in the flow designer data panel?",
    "options": [
     {
      "k": "A",
      "t": "Scratchpad variables",
      "zh": "Scratchpad变量"
     },
     {
      "k": "B",
      "t": "Data pills",
      "zh": "Data丸"
     },
     {
      "k": "C",
      "t": "Newly generated icons",
      "zh": "新生成的图标"
     },
     {
      "k": "D",
      "t": "New tabs",
      "zh": "新标签页"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "The visual representation of a variable in the Flow Designer user interface is a data pill. Each variable has its own data pill that developers can use to add the variable to action inputs.",
    "ref": [],
    "qZh": "流程设计器数据面板中的流程变量如何访问？",
    "notesZh": "Flow Designer 用户界面中变量的可视化表示是数据丸。每个变量都有自己的数据丸，开发人员可以使用该数据丸将变量添加到操作输入中。"
   },
   {
    "id": "x72",
    "q": "When managing global application files, you can NOT:",
    "options": [
     {
      "k": "A",
      "t": "Move an application file between global applications",
      "zh": "在全局应用程序之间移动应用程序文件"
     },
     {
      "k": "B",
      "t": "Move application files into or out of scoped application",
      "zh": "将应用程序文件移入或移出范围应用程序"
     },
     {
      "k": "C",
      "t": "Remove files from a global application",
      "zh": "从全局应用程序中删除文件"
     },
     {
      "k": "D",
      "t": "Add files from global scope to a global application",
      "zh": "将文件从全局范围添加到全局应用程序"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "管理全局应用程序文件时，您不能："
   },
   {
    "id": "x73",
    "q": "Identify the way(s) an application can respond to an Event:",
    "options": [
     {
      "k": "A",
      "t": "UI Policy",
      "zh": "UI政策"
     },
     {
      "k": "B",
      "t": "Scheduled Job",
      "zh": "预定作业"
     },
     {
      "k": "C",
      "t": "Script Action",
      "zh": "脚本动作"
     },
     {
      "k": "D",
      "t": "Email Notification",
      "zh": "E邮件通知"
     }
    ],
    "answer": [
     "C",
     "D"
    ],
    "multi": true,
    "notes": "",
    "ref": [],
    "qZh": "识别应用程序响应事件的方式："
   },
   {
    "id": "x74",
    "q": "Which utility is used to determine if field names in an Import Set match the field names on the target table when importing data into ServiceNow?",
    "options": [
     {
      "k": "A",
      "t": "Business Service Management Map",
      "zh": "业务服务管理地图"
     },
     {
      "k": "B",
      "t": "Auto Map Matching Fields",
      "zh": "自动地图匹配字段"
     },
     {
      "k": "C",
      "t": "Transform Maps",
      "zh": "变换贴图"
     },
     {
      "k": "D",
      "t": "CI Relationship Builder",
      "zh": "CI 关系生成器"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "将数据导入 ServiceNow 时，使用哪个实用程序来确定导入集中的字段名称是否与目标表上的字段名称匹配？"
   },
   {
    "id": "x75",
    "q": "Which of the following is NOT an example of when an application might use a Scheduled Script Execution(Scheduled Job)?",
    "options": [
     {
      "k": "A",
      "t": "The application needs to run a clean up script on the last day of every month",
      "zh": "应用程序需要在每月的最后一天运行清理脚本"
     },
     {
      "k": "B",
      "t": "The application needs to query the database every day to look for a unassigned records",
      "zh": "应用程序需要每天查询数据库寻找未分配的记录"
     },
     {
      "k": "C",
      "t": "The application needs to run a client-side script at the same time every day",
      "zh": "应用程序需要每天在同一时间运行客户端脚本"
     },
     {
      "k": "D",
      "t": "The application needs to send weekly email remainders",
      "zh": "应用程序需要每周发送电子邮件剩余内容"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "以下哪一项不是应用程序何时可能使用计划脚本执行（计划作业）的示例？"
   },
   {
    "id": "x76",
    "q": "Which method is used to retrieve system property?",
    "options": [
     {
      "k": "A",
      "t": "g_form.getProperty()",
      "zh": "g_form.getProperty()"
     },
     {
      "k": "B",
      "t": "gs.getAppProperty()",
      "zh": "gs.getAppProperty()"
     },
     {
      "k": "C",
      "t": "g_form.getAppProperty()",
      "zh": "g_form.getAppProperty()"
     },
     {
      "k": "D",
      "t": "gs.getProperty()",
      "zh": "gs.getProperty()"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "使用哪种方法检索系统属性？"
   },
   {
    "id": "x77",
    "q": "Which one of the following best describes what a flow is?",
    "options": [
     {
      "k": "A",
      "t": "A sequence of steps to automate processes on the platform",
      "zh": "A 在平台上自动化流程的步骤序列"
     },
     {
      "k": "B",
      "t": "A script that defines the steps to automate processes on the platform",
      "zh": "A 脚本，定义平台上自动化流程的步骤"
     },
     {
      "k": "C",
      "t": "A sequence of activities to automate processes on the platform",
      "zh": "A 平台上流程自动化的活动序列"
     },
     {
      "k": "D",
      "t": "A sequence of actions to automate processes on the platform",
      "zh": "A 平台上自动化流程的操作序列"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "以下哪一项最能描述流是什么？"
   },
   {
    "id": "x78",
    "q": "What are the UX (user experience) options available in Guided Application Creator?",
    "options": [
     {
      "k": "A",
      "t": "Workspace",
      "zh": "工作区"
     },
     {
      "k": "B",
      "t": "Desktop",
      "zh": "桌面端"
     },
     {
      "k": "C",
      "t": "Classic",
      "zh": "经典界面"
     },
     {
      "k": "D",
      "t": "Tablet",
      "zh": "平板端"
     },
     {
      "k": "E",
      "t": "Mobile",
      "zh": "移动端"
     }
    ],
    "answer": [
     "C",
     "E"
    ],
    "multi": true,
    "notes": "",
    "ref": [],
    "qZh": "引导式应用程序创建器中有哪些可用的 UX（用户体验）选项？"
   },
   {
    "id": "x79",
    "q": "As it relates ServiceNow reporting, which of the following statements describes what a metric can do?",
    "options": [
     {
      "k": "A",
      "t": "A metric is used to measure and evaluate the effectiveness of IT service management processes",
      "zh": "A指标用于衡量和评估IT服务管理流程的有效性"
     },
     {
      "k": "B",
      "t": "A metric is a comparative measurement used to report the effectiveness of workflows and SLAs",
      "zh": "A 指标是一种比较度量，用于报告工作流程和 SLA 的有效性"
     },
     {
      "k": "C",
      "t": "A metric is a time measurement used to report the effectiveness of workflows and SLAs",
      "zh": "A 指标是一种时间度量，用于报告工作流程和 SLA 的有效性"
     },
     {
      "k": "D",
      "t": "A metric is a report gauge used on homepages to display real-time data",
      "zh": "A 指标是主页上用于显示实时数据的报告仪表"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "由于与 ServiceNow 报告相关，以下哪项陈述描述了指标的用途？"
   },
   {
    "id": "x80",
    "q": "How can a developer extract data from the response body after calling a REST web service?",
    "options": [
     {
      "k": "A",
      "t": "Click the Convert Response Body button to convert the response.",
      "zh": "单击“转换响应正文”按钮以转换响应。"
     },
     {
      "k": "B",
      "t": "Use the XMLDocument2 API to extract data from XML formatted responses.",
      "zh": "使用 XMLDocument2 API 从 XML 格式的响应中提取数据。"
     },
     {
      "k": "C",
      "t": "Use the JSON API to convert JSON formatted responses to a JavaScript object",
      "zh": "使用 JSON API 将 JSON 格式的响应转换为 JavaScript 对象"
     },
     {
      "k": "D",
      "t": "Use the XMLDocument2 Script Include to parse the XML.",
      "zh": "使用 XMLDocument2 脚本包含来解析 XML。"
     },
     {
      "k": "E",
      "t": "Use the Convert Response Body wizard to translate the response into an object.",
      "zh": "使用转换响应正文向导将响应转换为对象。"
     }
    ],
    "answer": [
     "B",
     "C"
    ],
    "multi": true,
    "notes": "",
    "ref": [],
    "qZh": "调用 REST Web 服务后，开发人员如何从响应正文中提取数据？"
   },
   {
    "id": "x81",
    "q": "Which of the following would not be good fit for an application to run on the ServiceNow instance?",
    "options": [
     {
      "k": "A",
      "t": "Facilities Management application",
      "zh": "设施管理应用程序"
     },
     {
      "k": "B",
      "t": "Billing & Cost Management application",
      "zh": "计费和成本管理应用程序"
     },
     {
      "k": "C",
      "t": "Virtual Reality Gaming application",
      "zh": "虚拟现实游戏应用"
     },
     {
      "k": "D",
      "t": "A meeting room scheduling application",
      "zh": "A会议室调度应用"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "以下哪项不适合在 ServiceNow 实例上运行的应用程序？"
   },
   {
    "id": "x82",
    "q": "Which module creates a user for a Automated Test Framework?",
    "options": [
     {
      "k": "A",
      "t": "User Creation",
      "zh": "用户创建"
     },
     {
      "k": "B",
      "t": "Create Group",
      "zh": "创建组"
     },
     {
      "k": "C",
      "t": "Create Role",
      "zh": "创建角色"
     },
     {
      "k": "D",
      "t": "Create a User",
      "zh": "创建用户"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "哪个模块为自动化测试框架创建用户？"
   },
   {
    "id": "x83",
    "q": "Which role is required to access Guide Application Creator?",
    "options": [
     {
      "k": "A",
      "t": "sn_gac.app_creator",
      "zh": "sn_gac.app_creator"
     },
     {
      "k": "B",
      "t": "sn_app_creator.app_creator",
      "zh": "sn_app_creator.app_creator"
     },
     {
      "k": "C",
      "t": "sn_g_app_creator.app_creator",
      "zh": "sn_g_app_creator.app_creator"
     },
     {
      "k": "D",
      "t": "sn_developer.app_creator",
      "zh": "sn_developer.app_creator"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "需要哪个角色才能访问 Guide Application Creator？"
   },
   {
    "id": "x84",
    "q": "What are the core activities of a Workflow?",
    "options": [
     {
      "k": "A",
      "t": "Notifications",
      "zh": "通知"
     },
     {
      "k": "B",
      "t": "Utilities",
      "zh": "实用工具"
     },
     {
      "k": "C",
      "t": "Service Catalog",
      "zh": "服务目录"
     },
     {
      "k": "D",
      "t": "Subflows",
      "zh": "子流程"
     },
     {
      "k": "E",
      "t": "Approvals",
      "zh": "审批"
     },
     {
      "k": "F",
      "t": "Timers",
      "zh": "计时器"
     },
     {
      "k": "G",
      "t": "Conditions",
      "zh": "条件"
     },
     {
      "k": "H",
      "t": "Test",
      "zh": "测试"
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
    "ref": [],
    "qZh": "工作流程的核心活动是什么？"
   },
   {
    "id": "x85",
    "q": "Which of the following modules enables security rule debugging?",
    "options": [
     {
      "k": "A",
      "t": "Access Control > Debugging > Debug Security Rule",
      "zh": "访问控制 > 调试 > 调试安全规则"
     },
     {
      "k": "B",
      "t": "System Diagnostics > Debugging > Debug Security Rules",
      "zh": "系统诊断 > 调试 > 调试安全规则"
     },
     {
      "k": "C",
      "t": "System Security > Debugging > Debug Security Rules",
      "zh": "系统安全 > 调试 > 调试安全规则"
     },
     {
      "k": "D",
      "t": "System Security > Session Debug > Debug Security Rules",
      "zh": "系统安全 > 会话调试 > 调试安全规则"
     },
     {
      "k": "E",
      "t": "System Diagnostics > Session Debug > Debug Security Rules",
      "zh": "系统诊断 > 会话调试 > 调试安全规则"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "以下哪个模块可以启用安全规则调试？"
   },
   {
    "id": "x86",
    "q": "What are the 2 core base tables from which all other tables are extended in ServiceNow?",
    "options": [
     {
      "k": "A",
      "t": "incident and cmdb_ci",
      "zh": "incident 和 cmdb_ci"
     },
     {
      "k": "B",
      "t": "task and cmdb_model",
      "zh": "task 和 cmdb_model"
     },
     {
      "k": "C",
      "t": "task and cmdb",
      "zh": "task和cmdb"
     },
     {
      "k": "D",
      "t": "incident and cmdb_rel_ci",
      "zh": "incident 和 cmdb_rel_ci"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "ServiceNow 中所有其他表均由哪两个核心基表扩展而来？"
   },
   {
    "id": "x87",
    "q": "What is the name of the intuitive development interface for building applications?",
    "options": [
     {
      "k": "A",
      "t": "Guided Application Creator",
      "zh": "Guided 应用程序创建器"
     },
     {
      "k": "B",
      "t": "ServiceNow Studio",
      "zh": "ServiceNow工作室"
     },
     {
      "k": "C",
      "t": "ServiceNow Creator",
      "zh": "ServiceNow 创建者"
     },
     {
      "k": "D",
      "t": "App Engine Studio",
      "zh": "应用引擎工作室（App Engine Studio）"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "用于构建应用程序的直观开发界面的名称是什么？"
   },
   {
    "id": "x88",
    "q": "Which protects applications by identifying and restricting access to application files and data?",
    "options": [
     {
      "k": "A",
      "t": "ACLs",
      "zh": "ACL"
     },
     {
      "k": "B",
      "t": "Application Scope",
      "zh": "应用范围"
     },
     {
      "k": "C",
      "t": "Roles",
      "zh": "角色"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "哪个通过识别和限制对应用程序文件和数据的访问来保护应用程序？"
   },
   {
    "id": "x89",
    "q": "While debugging security rules, what does the blue color code indicate?",
    "options": [
     {
      "k": "A",
      "t": "Indicates the ACL is already in the cache and does not need to be re-evaluated",
      "zh": "表示ACL已经在缓存中，不需要重新评估"
     },
     {
      "k": "B",
      "t": "Access denied",
      "zh": "访问被拒绝"
     },
     {
      "k": "C",
      "t": "Passed",
      "zh": "已通过"
     },
     {
      "k": "D",
      "t": "Access granted",
      "zh": "已授予访问权限"
     },
     {
      "k": "E",
      "t": "Failed",
      "zh": "失败"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "调试安全规则时，蓝色代码表示什么？"
   },
   {
    "id": "x90",
    "q": "What records are used to track cross-scope applications or scripts that request access to an application, application resource or event?",
    "options": [
     {
      "k": "A",
      "t": "Restricted caller access records",
      "zh": "限制呼叫者访问记录"
     },
     {
      "k": "B",
      "t": "Caller tracking records",
      "zh": "Caller追踪记录"
     },
     {
      "k": "C",
      "t": "Cross-scope access records",
      "zh": "跨范围访问记录"
     },
     {
      "k": "D",
      "t": "Access control level records",
      "zh": "访问控制级别记录"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "哪些记录用于跟踪请求访问应用程序、应用程序资源或事件的跨范围应用程序或脚本？"
   },
   {
    "id": "x91",
    "q": "Which of the following is NOT a type of annotation?",
    "options": [
     {
      "k": "A",
      "t": "Text",
      "zh": "文本"
     },
     {
      "k": "B",
      "t": "Info Box Blue",
      "zh": "信息框蓝色"
     },
     {
      "k": "C",
      "t": "Line Separator",
      "zh": "线分隔符"
     },
     {
      "k": "D",
      "t": "Info Box Red",
      "zh": "信息框红色"
     },
     {
      "k": "E",
      "t": "Section Separator",
      "zh": "截面分隔符"
     },
     {
      "k": "F",
      "t": "Info Box Yellow",
      "zh": "信息框黄色"
     },
     {
      "k": "G",
      "t": "Section Details",
      "zh": "部分详细信息"
     }
    ],
    "answer": [
     "F"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "以下哪一项不是注释类型？"
   },
   {
    "id": "x92",
    "q": "What is the name of the guided application creator plugin?",
    "options": [
     {
      "k": "A",
      "t": "com.glide.sn-guided-creator-app",
      "zh": "com.glide.sn-guided-creator-app"
     },
     {
      "k": "B",
      "t": "com.glide.sn-guided-app-creator",
      "zh": "com.glide.sn-guided-app-creator"
     },
     {
      "k": "C",
      "t": "glide.sn-guided-app-creator",
      "zh": "glide.sn-guided-app-creator"
     },
     {
      "k": "D",
      "t": "com.glide.guided-app-creator",
      "zh": "com.glide.guided-app-creator"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "引导应用程序创建器插件的名称是什么？"
   },
   {
    "id": "x93",
    "q": "Which of the following statements must evaluate to true to grant a user access to application table’s record?\na) Conditions configured in the access controls must evaluate to true\nb) Scripts configured in the access control must evaluate to true\nc) The user has one of the roles specified in the required roles related list\nd) Оther matching access controls for the records evaluate to true",
    "options": [
     {
      "k": "A",
      "t": "a and c",
      "zh": "a 和 c"
     },
     {
      "k": "B",
      "t": "a and b",
      "zh": "a 和 b"
     },
     {
      "k": "C",
      "t": "a, b, c and d",
      "zh": "a、b、c 和 d"
     },
     {
      "k": "D",
      "t": "a, b, c",
      "zh": "a、b、c"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "以下哪条语句必须评估为 true 才能授予用户对应用程序表记录的访问权限？\na) 访问控制中配置的条件必须评估为 true\nb) 访问控制中配置的脚本必须评估为 true\nc) 用户具有所需角色相关列表中指定的角色之一\nd) 记录的其他匹配访问控制评估为 true"
   },
   {
    "id": "x94",
    "q": "Which of the below is the best practice for adding instructions to a form?",
    "options": [
     {
      "k": "A",
      "t": "Populated read only field",
      "zh": "填充只读字段"
     },
     {
      "k": "B",
      "t": "Context menu or UI Action",
      "zh": "上下文菜单或UI操作"
     },
     {
      "k": "C",
      "t": "Form Annotations",
      "zh": "Form注释"
     },
     {
      "k": "D",
      "t": "Related links to wiki pages",
      "zh": "维基页面的相关链接"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "以下哪项是将说明添加到表单的最佳实践？"
   },
   {
    "id": "x95",
    "q": "Which of the following API methods are used when working with datetime in a privately scoped application?",
    "options": [
     {
      "k": "A",
      "t": "GlideSystem",
      "zh": "GlideSystem"
     },
     {
      "k": "B",
      "t": "GlideDateTime",
      "zh": "GlideDateTime"
     },
     {
      "k": "C",
      "t": "gs.nowDateTime()",
      "zh": "gs.nowDateTime()"
     },
     {
      "k": "D",
      "t": "GlideRecord",
      "zh": "GlideRecord"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "在私有范围的应用程序中处理日期时间时，使用以下哪些 API 方法？"
   },
   {
    "id": "x96",
    "q": "In a business rule which of the following returns the sys_id of the current logged in user?",
    "options": [
     {
      "k": "A",
      "t": "gs.getUserSysID()",
      "zh": "gs.getUserSysID()"
     },
     {
      "k": "B",
      "t": "g_form.getUserSysID()",
      "zh": "g_form.getUserSysID()"
     },
     {
      "k": "C",
      "t": "gs.getUserID()",
      "zh": "gs.getUserID()"
     },
     {
      "k": "D",
      "t": "g_form.getUserID()",
      "zh": "g_form.getUserID()"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "在业务规则中，以下哪项返回当前登录用户的 sys_id？"
   },
   {
    "id": "x97",
    "q": "How does ServiceNow match inbound email to existing records?",
    "options": [
     {
      "k": "A",
      "t": "Watermark",
      "zh": "水印"
     },
     {
      "k": "B",
      "t": "Record link",
      "zh": "记录链接"
     },
     {
      "k": "C",
      "t": "Subject Line",
      "zh": "主题行"
     },
     {
      "k": "D",
      "t": "sys_id",
      "zh": "sys_id"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "ServiceNow 如何将入站电子邮件与现有记录进行匹配？"
   },
   {
    "id": "x98",
    "q": "Which of the following is NOT report type in ServiceNow reports?",
    "options": [
     {
      "k": "A",
      "t": "List",
      "zh": "列表"
     },
     {
      "k": "B",
      "t": "Trend",
      "zh": "趋势"
     },
     {
      "k": "C",
      "t": "Chart",
      "zh": "图表"
     },
     {
      "k": "D",
      "t": "Line",
      "zh": "折线图"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "以下哪项不是 ServiceNow 报告中的报告类型？"
   },
   {
    "id": "x99",
    "q": "Which of the following can be used to place a report on a Homepage?",
    "options": [
     {
      "k": "A",
      "t": "Gauge",
      "zh": "仪表盘"
     },
     {
      "k": "B",
      "t": "Catalog",
      "zh": "服务目录"
     },
     {
      "k": "C",
      "t": "Gadget",
      "zh": "小工具"
     },
     {
      "k": "D",
      "t": "Tag",
      "zh": "标签"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "以下哪一项可用于在主页上放置报表？"
   },
   {
    "id": "x100",
    "q": "The option in Table configuration that allows this table to be extended from?",
    "options": [
     {
      "k": "A",
      "t": "Extensible",
      "zh": "可扩展"
     },
     {
      "k": "B",
      "t": "Can be Extended",
      "zh": "可扩展"
     },
     {
      "k": "C",
      "t": "Extended By",
      "zh": "扩展者"
     },
     {
      "k": "D",
      "t": "Extends",
      "zh": "扩展"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "表配置中的选项允许该表从？"
   },
   {
    "id": "x101",
    "q": "When debugging a script a developer can log breakpoints or conditional log points to log messages to the console at specific lines, and remove log points when they are done debugging them. which system property must be set to true to enable log points?",
    "options": [
     {
      "k": "A",
      "t": "com.glide.index_suggestion.debug",
      "zh": "com.glide.index_suggestion.debug"
     },
     {
      "k": "B",
      "t": "glide.ui.js_can_debug",
      "zh": "glide.ui.js_can_debug"
     },
     {
      "k": "C",
      "t": "glide.debugger.log.ui",
      "zh": "glide.debugger.log.ui"
     },
     {
      "k": "D",
      "t": "glide.debug.log_point",
      "zh": "glide.debug.log_point"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "调试脚本时，开发人员可以记录断点或条件日志点，以将消息记录到控制台的特定行，并在调试完成后删除日志点。哪个系统属性必须设置为 true 才能启用日志点？"
   },
   {
    "id": "x102",
    "q": "Application files in a ServiceNow application are:",
    "options": [
     {
      "k": "A",
      "t": "csv files containing data imported into an application",
      "zh": "csv 文件包含导入应用程序的数据"
     },
     {
      "k": "B",
      "t": "An xml export of the applications table records",
      "zh": "应用程序表记录的 xml 导出\n应用程序导出集的"
     },
     {
      "k": "C",
      "t": "XML exports of an application export set",
      "zh": "XML 导出"
     },
     {
      "k": "D",
      "t": "Artifacts comprising the ServiceNow application",
      "zh": "Artifacts 组成 ServiceNow 应用程序"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "Application 文件为："
   },
   {
    "id": "x103",
    "q": "Which of the following statements is true for managing applications purchased from the Store?",
    "options": [
     {
      "k": "A",
      "t": "Applications that belong to other organizations can be customized.",
      "zh": "属于其他组织的应用程序可以自定义。"
     },
     {
      "k": "B",
      "t": "There are separate entitlements for application-customizations.",
      "zh": "应用程序自定义有单独的权利。"
     },
     {
      "k": "C",
      "t": "Applications that belong to other organizations can be changed.",
      "zh": "属于其他组织的应用程序可以更改。"
     },
     {
      "k": "D",
      "t": "Customizations cannot revert back to the base system application.",
      "zh": "Customizations 无法恢复为基本系统应用程序。"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "对于管理从商店购买的应用程序，以下哪项陈述是正确的？"
   },
   {
    "id": "x104",
    "q": "When creating an application via Guided Application Creator, which of the following is NOT a user experience options?",
    "options": [
     {
      "k": "A",
      "t": "Workplace",
      "zh": "工作场所"
     },
     {
      "k": "B",
      "t": "Portal",
      "zh": "门户"
     },
     {
      "k": "C",
      "t": "Classic",
      "zh": "经典界面"
     },
     {
      "k": "D",
      "t": "Mobile",
      "zh": "移动端"
     }
    ],
    "answer": [
     "A",
     "B"
    ],
    "multi": true,
    "notes": "",
    "ref": [],
    "qZh": "通过引导式应用程序创建器创建应用程序时，以下哪项不是用户体验选项？"
   },
   {
    "id": "x105",
    "q": "Which Script Debugger feature helps filter debugging searches to quickly narrow down script problems?",
    "options": [
     {
      "k": "A",
      "t": "Session Tracer",
      "zh": "会话跟踪器"
     },
     {
      "k": "B",
      "t": "Script Filter",
      "zh": "Script过滤器"
     },
     {
      "k": "C",
      "t": "Script Search",
      "zh": "Script搜索"
     },
     {
      "k": "D",
      "t": "Script Tracer",
      "zh": "Script 跟踪器"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "哪个脚本调试器功能有助于过滤调试搜索以快速缩小脚本问题范围？"
   },
   {
    "id": "x106",
    "q": "What one of the following is the correct syntax for adding dynamic content to a notification's HTML message field?",
    "options": [
     {
      "k": "A",
      "t": "$current.short_description",
      "zh": "$current.short_description"
     },
     {
      "k": "B",
      "t": "$short_description",
      "zh": "$short_description"
     },
     {
      "k": "C",
      "t": "current.short_description",
      "zh": "current.short_description"
     },
     {
      "k": "D",
      "t": "${short_description}",
      "zh": "${short_description}"
     },
     {
      "k": "E",
      "t": "${current.short_description}",
      "zh": "${current.short_description}"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "以下哪一项是将动态内容添加到通知的 HTML 消息字段的正确语法？"
   },
   {
    "id": "x107",
    "q": "Which of the following is NOT a type of authentication used by REST APIs?",
    "options": [
     {
      "k": "A",
      "t": "OAuth 2.0",
      "zh": "OAuth 2.0"
     },
     {
      "k": "B",
      "t": "Basic Auth",
      "zh": "基本身份验证"
     },
     {
      "k": "C",
      "t": "Mutual authentication using protocol profiles",
      "zh": "使用协议配置文件进行相互身份验证"
     },
     {
      "k": "D",
      "t": "JDBC",
      "zh": "JDBC"
     },
     {
      "k": "E",
      "t": "CIM",
      "zh": "CIM"
     }
    ],
    "answer": [
     "D",
     "E"
    ],
    "multi": true,
    "notes": "",
    "ref": [],
    "qZh": "以下哪一项不是 REST API 使用的身份验证类型？"
   },
   {
    "id": "x108",
    "q": "Which of the following are NOT methods from the GlideRecord API?",
    "options": [
     {
      "k": "A",
      "t": "query()",
      "zh": "query()"
     },
     {
      "k": "B",
      "t": "addEncodedQuery()",
      "zh": "addEncodedQuery()"
     },
     {
      "k": "C",
      "t": "addQuery()",
      "zh": "addQuery()"
     },
     {
      "k": "D",
      "t": "addOrQuery()",
      "zh": "addOrQuery()"
     },
     {
      "k": "E",
      "t": "addAndQuery()",
      "zh": "addAndQuery()"
     }
    ],
    "answer": [
     "D",
     "E"
    ],
    "multi": true,
    "notes": "https://developer.servicenow.com/dev.do#!/learn/learning-plans/quebec/new_to_servicenow/app_store_learnv2_scripting_quebec_gliderecord",
    "ref": [],
    "qZh": "以下哪一项不是来自 GlideRecord API 的方法？",
    "notesZh": "https://developer.servicenow.com/dev.do#!/learn/learning-plans/quebec/new_to_servicenow/app_store_learnv2_scripting_quebec_gliderecord"
   },
   {
    "id": "x109",
    "q": "Which of the following pops out a special field messages?",
    "options": [
     {
      "k": "A",
      "t": "g_form.addInfoMessage()",
      "zh": "g_form.addInfoMessage()"
     },
     {
      "k": "B",
      "t": "g_form.showFieldMsg()",
      "zh": "g_form.showFieldMsg()"
     },
     {
      "k": "C",
      "t": "g_form.addFieldMessage()",
      "zh": "g_form.addFieldMessage()"
     },
     {
      "k": "D",
      "t": "g_form.addErrorMessage()",
      "zh": "g_form.addErrorMessage()"
     },
     {
      "k": "E",
      "t": "g_form.showFieldMessage()",
      "zh": "g_form.showFieldMessage()"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "下列哪项会弹出特殊字段消息？"
   },
   {
    "id": "x110",
    "q": "Which API provides methods to translate text into multiple languages in real life?",
    "options": [
     {
      "k": "A",
      "t": "Dynamic Result Answer",
      "zh": "动态结果答案"
     },
     {
      "k": "B",
      "t": "Genius Result Answer",
      "zh": "Genius 结果答案"
     },
     {
      "k": "C",
      "t": "Dynamic Translation",
      "zh": "动态翻译"
     },
     {
      "k": "D",
      "t": "Genius Translation",
      "zh": "Genius翻译"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "哪个API提供了现实生活中将文本翻译成多种语言的方法？"
   },
   {
    "id": "x111",
    "q": "What is not true about email notifications? (select one)",
    "options": [
     {
      "k": "A",
      "t": "When",
      "zh": "时"
     },
     {
      "k": "B",
      "t": "How",
      "zh": "如何"
     },
     {
      "k": "C",
      "t": "What",
      "zh": "什么"
     },
     {
      "k": "D",
      "t": "Who",
      "zh": "谁"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "有关电子邮件通知的哪些内容是不正确的？ （选择一项）"
   },
   {
    "id": "x112",
    "q": "The getCurrentDomainID() method is part of which scoped class?",
    "options": [
     {
      "k": "A",
      "t": "Scoped Domain",
      "zh": "Scoped 域"
     },
     {
      "k": "B",
      "t": "ScopedDCManager",
      "zh": "ScopedDCManager"
     },
     {
      "k": "C",
      "t": "GlideRecord",
      "zh": "GlideRecord"
     },
     {
      "k": "D",
      "t": "Scoped GlideSession",
      "zh": "作用域 GlideSession"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "getCurrentDomainID() 方法属于哪个作用域类的一部分？"
   },
   {
    "id": "x113",
    "q": "Which of the following objects does a before business rule have access to?",
    "options": [
     {
      "k": "A",
      "t": "GlideRecord",
      "zh": "GlideRecord"
     },
     {
      "k": "B",
      "t": "All the above",
      "zh": "以上全部"
     },
     {
      "k": "C",
      "t": "current",
      "zh": "当前记录（current）"
     },
     {
      "k": "D",
      "t": "previous",
      "zh": "上一个"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "前置业务规则可以访问以下哪些对象？"
   },
   {
    "id": "x114",
    "q": "Which method is used in emulating mobile for testing?",
    "options": [
     {
      "k": "A",
      "t": "$tablet.do",
      "zh": "$tablet.do"
     },
     {
      "k": "B",
      "t": "$mobile.do",
      "zh": "$mobile.do"
     },
     {
      "k": "C",
      "t": "$t.do",
      "zh": "$t.do"
     },
     {
      "k": "D",
      "t": "$m.do",
      "zh": "$m.do"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "模拟手机测试用什么方法？"
   },
   {
    "id": "x115",
    "q": "When evaluating Access Controls, ServiceNow searches and evaluates:",
    "options": [
     {
      "k": "A",
      "t": "Only for matches on the current field",
      "zh": "仅适用于当前字段的匹配"
     },
     {
      "k": "B",
      "t": "Only for matches on the current table",
      "zh": "仅适用于当前表上的匹配"
     },
     {
      "k": "C",
      "t": "From the most specific match to the most generic match",
      "zh": "从最具体的匹配到最通用的匹配"
     },
     {
      "k": "D",
      "t": "From the most generic match to the most specific match",
      "zh": "从最通用的匹配到最具体的匹配"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "评估访问控制时，ServiceNow 搜索并评估："
   },
   {
    "id": "x116",
    "q": "What is true about homepages on mobile?",
    "options": [
     {
      "k": "A",
      "t": "Same as desktop homepages without the delete option",
      "zh": "与桌面主页相同，没有删除选项"
     },
     {
      "k": "B",
      "t": "There are no homepages on mobile",
      "zh": "手机上没有主页"
     },
     {
      "k": "C",
      "t": "Same as desktop homepages with the delete option",
      "zh": "与带有删除选项的桌面主页相同"
     },
     {
      "k": "D",
      "t": "Same as desktop homepages in every way",
      "zh": "与桌面主页各方面相同"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "关于移动设备主页的说法，正确的是？"
   },
   {
    "id": "x117",
    "q": "Which of the following variables are NOT available in all Business Rules? (Select All That Apply)",
    "options": [
     {
      "k": "A",
      "t": "current",
      "zh": "当前记录（current）"
     },
     {
      "k": "B",
      "t": "GlideSystem",
      "zh": "GlideSystem"
     },
     {
      "k": "C",
      "t": "previous",
      "zh": "上一个"
     },
     {
      "k": "D",
      "t": "g_scratchpad",
      "zh": "g_scratchpad"
     }
    ],
    "answer": [
     "C",
     "D"
    ],
    "multi": true,
    "notes": "Display business rules do not have access to previous, before after and async do not have access to g_scratchpad.",
    "ref": [],
    "qZh": "以下哪些变量在所有业务规则中都不可用？ （选择所有适用项）",
    "notesZh": "Display业务规则无权访问previous、before after和async无权访问g_scratchpad。"
   },
   {
    "id": "x118",
    "q": "Which one of the following is NOT a GlideUser (g_user) method?",
    "options": [
     {
      "k": "A",
      "t": "hasRole()",
      "zh": "hasRole()"
     },
     {
      "k": "B",
      "t": "userName",
      "zh": "userName"
     },
     {
      "k": "C",
      "t": "getFullName()",
      "zh": "getFullName()"
     },
     {
      "k": "D",
      "t": "hasRoleExactly()",
      "zh": "hasRoleExactly()"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "以下哪一项不是 GlideUser (g_user) 方法？"
   },
   {
    "id": "x119",
    "q": "Which of the below is not a valid state for a scheduled job in ServiceNow instance?",
    "options": [
     {
      "k": "A",
      "t": "Error",
      "zh": "错误"
     },
     {
      "k": "B",
      "t": "Running",
      "zh": "运行中"
     },
     {
      "k": "C",
      "t": "Queued",
      "zh": "排队中"
     },
     {
      "k": "D",
      "t": "Ready",
      "zh": "就绪"
     },
     {
      "k": "E",
      "t": "Waiting for approval",
      "zh": "等待审批"
     }
    ],
    "answer": [
     "E"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "以下哪项不是 ServiceNow 实例中计划作业的有效状态？"
   },
   {
    "id": "x120",
    "q": "What does the code search feature do in the studio?",
    "options": [
     {
      "k": "A",
      "t": "Searching in all applications",
      "zh": "在所有应用程序中搜索"
     },
     {
      "k": "B",
      "t": "Search from a list of applications",
      "zh": "从应用程序列表中搜索"
     },
     {
      "k": "C",
      "t": "Searching in your application",
      "zh": "在您的应用程序中搜索"
     },
     {
      "k": "D",
      "t": "Searching in a business rule",
      "zh": "在业务规则中搜索"
     }
    ],
    "answer": [
     "A",
     "C",
     "D"
    ],
    "multi": true,
    "notes": "",
    "ref": [],
    "qZh": "工作室中的代码搜索功能有什么作用？"
   },
   {
    "id": "x121",
    "q": "What is the main purpose of Integration Hub in ServiceNow?",
    "options": [
     {
      "k": "A",
      "t": "Custom application from ServiceNow store used for importing data into ServiceNow",
      "zh": "来自 ServiceNow 存储的自定义应用程序，用于将数据导入 ServiceNow"
     },
     {
      "k": "B",
      "t": "Activity in workflow designer to integrate 3rd party applications",
      "zh": "工作流设计器中用于集成第 3 方应用程序的活动"
     },
     {
      "k": "C",
      "t": "Enables execution of third-party APIs as part of a flow when a specific event occurs in ServiceNow",
      "zh": "当 ServiceNow 中发生特定事件时，允许将第三方 API 作为流程的一部分执行"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "ServiceNow 中集成中心的主要用途是什么？"
   },
   {
    "id": "x122",
    "q": "When ServiceNow receives an inbound email it attempts to match the sender to a user record. Which one of the following is NOT true?",
    "options": [
     {
      "k": "A",
      "t": "Inbound Action scripts can reference the user using methods such as gs.getUserName()",
      "zh": "Inbound 操作脚本可以使用 gs.getUserName() 等方法引用用户"
     },
     {
      "k": "B",
      "t": "If automatic user creation is disabled, the Guest user is impersonated",
      "zh": "如果禁用自动用户创建，则模拟来宾用户"
     },
     {
      "k": "C",
      "t": "If a match is found, the user is impersonated for the execution of the Inbound Actions",
      "zh": "如果找到匹配项，则模拟用户来执行入站操作"
     },
     {
      "k": "D",
      "t": "If no match is found the email is sent to the Inbox Junk folder",
      "zh": "如果未找到匹配项，电子邮件将发送到收件箱垃圾文件夹"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "当 ServiceNow 收到入站电子邮件时，它会尝试将发件人与用户记录进行匹配。以下哪一项是不正确的？"
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
      "t": "a, b, c, and d",
      "zh": "a、b、c 和 d"
     },
     {
      "k": "B",
      "t": "b, c, and d",
      "zh": "b、c 和 d"
     },
     {
      "k": "C",
      "t": "a, b, and d",
      "zh": "a、b 和 d"
     },
     {
      "k": "D",
      "t": "a, b, and c",
      "zh": "a、b 和 c"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "对于表单设计器，以下哪项陈述是正确的？\na) 要将字段添加到表单布局，请将字段从“字段”选项卡拖动到表单上的所需目标位置。\nb) 要在表单的表格上创建新字段，请将适当的数据类型从“字段类型”选项卡拖动到表单，然后配置新字段。\nc) 要从表单布局中删除字段，请将鼠标悬停在该字段上以启用操作按钮，然后选择删除 (X) 按钮。\nd) 要将某个部分添加到表单布局，请将其从“字段类型”选项卡拖动到表单上的所需目标位置。"
   },
   {
    "id": "p2",
    "q": "Which of the following are configured in an Email Notification?\na) Who will receive the notification.\nb) What content will be in the notification.\nc) When to send the notification.\nd) How to send the notification.",
    "options": [
     {
      "k": "A",
      "t": "a, b and c",
      "zh": "a、b 和 c"
     },
     {
      "k": "B",
      "t": "a, b, and d",
      "zh": "a、b 和 d"
     },
     {
      "k": "C",
      "t": "b, c and d",
      "zh": "b、c 和 d"
     },
     {
      "k": "D",
      "t": "a, c and d",
      "zh": "a、c 和 d"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://hi.service-now.com/kb_view.do?sysparm_article=KB0712569"
    ],
    "qZh": "电子邮件通知中配置了以下哪些内容？\na) 谁将收到通知。\nb) 通知中包含哪些内容。\nc) 何时发送通知。\nd) 如何发送通知。"
   },
   {
    "id": "p3",
    "q": "To see what scripts, reports, and other application artifacts will be in a published application:",
    "options": [
     {
      "k": "A",
      "t": "Enter the name of the Application in the Global search field",
      "zh": "在全局搜索字段中输入应用程序的名称"
     },
     {
      "k": "B",
      "t": "Open the list of Update Sets for the instance",
      "zh": "打开实例的更新集列表"
     },
     {
      "k": "C",
      "t": "Examine the Application Files Related List in the application to be published",
      "zh": "检查要发布的应用程序中的应用程序文件相关列表"
     },
     {
      "k": "D",
      "t": "Open the artifact records individually to verify the value in the Application field",
      "zh": "单独打开工件记录以验证“应用程序”字段中的值"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://community.servicenow.com/community?id=community_article&sys_id=d2dce665dbd0dbc01dcaf3231f9619fe"
    ],
    "qZh": "要查看已发布的应用程序中将包含哪些脚本、报告和其他应用程序工件："
   },
   {
    "id": "p4",
    "q": "Which one of the following is NOT a debugging strategy for client-side scripts?",
    "options": [
     {
      "k": "A",
      "t": "g_form.addInfoMessage()",
      "zh": "g_form.addInfoMessage()"
     },
     {
      "k": "B",
      "t": "Field Watcher",
      "zh": "现场观察者"
     },
     {
      "k": "C",
      "t": "jslog()",
      "zh": "jslog()"
     },
     {
      "k": "D",
      "t": "gs.log()",
      "zh": "gs.log()"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://developer.servicenow.com/dev.do#!/learn/learning-plans/istanbul/new_to_servicenow/"
    ],
    "qZh": "以下哪一项不是客户端脚本的调试策略？"
   },
   {
    "id": "p5",
    "q": "Which Application Access configuration field(s) are NOT available if the Can read configuration field is NOT selected?",
    "options": [
     {
      "k": "A",
      "t": "All access to this table via web services",
      "zh": "所有通过Web服务访问此表"
     },
     {
      "k": "B",
      "t": "Can create, Can update, and Can delete",
      "zh": "可以创建、可以更新、可以删除"
     },
     {
      "k": "C",
      "t": "Can read does not affect the availability of other Application Access fields",
      "zh": "Can读取不影响其他应用程序访问字段的可用性"
     },
     {
      "k": "D",
      "t": "Allow configuration",
      "zh": "允许配置"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "如果未选择“可以读取配置”字段，哪些应用程序访问配置字段不可用？"
   },
   {
    "id": "p6",
    "q": "Which of the following is NOT a trigger type in Flow Designer?",
    "options": [
     {
      "k": "A",
      "t": "Outbound Email",
      "zh": "出站电子邮件"
     },
     {
      "k": "B",
      "t": "Application",
      "zh": "应用程序"
     },
     {
      "k": "C",
      "t": "Record",
      "zh": "记录"
     },
     {
      "k": "D",
      "t": "Schedule",
      "zh": "Schedule"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://docs.servicenow.com/bundle/orlando-servicenow-platform/page/administer/flow-designer/reference/flow-triggers.html"
    ],
    "qZh": "以下哪项不是 Flow Designer 中的触发器类型？"
   },
   {
    "id": "p7",
    "q": "When creating new application files in a scoped application, cross scope access is turned on by default in which of the following?",
    "options": [
     {
      "k": "A",
      "t": "REST messages",
      "zh": "REST消息"
     },
     {
      "k": "B",
      "t": "Table",
      "zh": "表"
     },
     {
      "k": "C",
      "t": "Script Include",
      "zh": "Script 包含"
     },
     {
      "k": "D",
      "t": "Workflow",
      "zh": "工作流程"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://docs.servicenow.com/bundle/orlando-application-development/page/build/applications/task/set-RCA-level.html"
    ],
    "qZh": "在作用域应用程序中创建新应用程序文件时，默认情况下在以下哪项中打开跨作用域访问？"
   },
   {
    "id": "p8",
    "q": "In an Email Notification, which one of the following is NOT true for the Weight field?",
    "options": [
     {
      "k": "A",
      "t": "Only Notifications with the highest weight for the same record and recipients are sent",
      "zh": "仅发送同一记录和收件人的权重最高的通知"
     },
     {
      "k": "B",
      "t": "A Weight value of zero means that no email should be sent",
      "zh": "A 权重值为零表示不应发送电子邮件"
     },
     {
      "k": "C",
      "t": "The Weight value defaults to zero",
      "zh": "权重值默认为零"
     },
     {
      "k": "D",
      "t": "A Weight value of zero means the Notification is always sent when the Notification's When to send criteria is met",
      "zh": "A 权重值为零表示满足通知的发送时间条件时始终发送通知"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://docs.servicenow.com/bundle/orlando-servicenow-platform/page/administer/notification/task/t_CreateANotification.html"
    ],
    "qZh": "在电子邮件通知中，以下哪一项对于“重量”字段不成立？"
   },
   {
    "id": "p9",
    "q": "Which of the following objects does a Display Business Rule NOT have access to?",
    "options": [
     {
      "k": "A",
      "t": "previous",
      "zh": "上一个"
     },
     {
      "k": "B",
      "t": "GlideSystem",
      "zh": "GlideSystem"
     },
     {
      "k": "C",
      "t": "g_scratchpad",
      "zh": "g_scratchpad"
     },
     {
      "k": "D",
      "t": "current",
      "zh": "当前记录（current）"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://community.servicenow.com/community?id=community_question&sys_id=8af90f29db5cdbc01dcaf3231f96197c"
    ],
    "qZh": "显示业务规则无权访问以下哪些对象？"
   },
   {
    "id": "p10",
    "q": "Which of the following features are available to Global applications? (Choose two.)",
    "options": [
     {
      "k": "A",
      "t": "Automated Test Framework",
      "zh": "自动化测试框架"
     },
     {
      "k": "B",
      "t": "Source Control",
      "zh": "源代码管理"
     },
     {
      "k": "C",
      "t": "Delegated Development",
      "zh": "委托开发"
     },
     {
      "k": "D",
      "t": "Flow Designer",
      "zh": "Flow设计器"
     }
    ],
    "answer": [
     "C",
     "D"
    ],
    "multi": true,
    "notes": "",
    "ref": [],
    "qZh": "全局应用程序可以使用以下哪些功能？ （选择两个。）"
   },
   {
    "id": "p11",
    "q": "Which one of the following is NOT a UI Action type?",
    "options": [
     {
      "k": "A",
      "t": "List choice",
      "zh": "列表选择"
     },
     {
      "k": "B",
      "t": "Form button",
      "zh": "Form按钮"
     },
     {
      "k": "C",
      "t": "List banner button",
      "zh": "List 横幅按钮"
     },
     {
      "k": "D",
      "t": "Form choice",
      "zh": "表格选择"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://docs.servicenow.com/bundle/orlando-platform-administration/page/administer/list-administration/task/t_EditingAUIAction.html"
    ],
    "qZh": "以下哪一项不是 UI 操作类型？"
   },
   {
    "id": "p12",
    "q": "Which of the following is NOT supported by Flow Designer?",
    "options": [
     {
      "k": "A",
      "t": "Call a subflow from a flow",
      "zh": "从流程中调用子流程"
     },
     {
      "k": "B",
      "t": "Test a flow with rollback",
      "zh": "测试带有回滚的流程"
     },
     {
      "k": "C",
      "t": "Use Delegated Developer",
      "zh": "使用委托开发者"
     },
     {
      "k": "D",
      "t": "Run a flow from a MetricBase Trigger",
      "zh": "从 MetricBase 触发器运行流程"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://community.servicenow.com/community?id=community_question&sys_id=b4d26e44db13ab409540e15b8a9619c9"
    ],
    "qZh": "Flow Designer 不支持以下哪一项？"
   },
   {
    "id": "p13",
    "q": "Which of the following are true for reports in ServiceNow? (Choose three.)",
    "options": [
     {
      "k": "A",
      "t": "Any user can see any report shared with them.",
      "zh": "任何用户都可以查看与其共享的任何报告。"
     },
     {
      "k": "B",
      "t": "Can be a graphical representation of data.",
      "zh": "可以是数据的图形表示。"
     },
     {
      "k": "C",
      "t": "All users can generate reports on any table.",
      "zh": "所有用户都可以在任何表上生成报告。"
     },
     {
      "k": "D",
      "t": "Can be run on demand by authorized users.",
      "zh": "可以由授权用户按需运行。"
     },
     {
      "k": "E",
      "t": "Can be scheduled to be run and distributed by email.",
      "zh": "可以安排运行并通过电子邮件分发。"
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
    ],
    "qZh": "对于 ServiceNow 中的报告，以下哪一项是正确的？ （选择三项。）"
   },
   {
    "id": "p14",
    "q": "Modules must have a Link type. Which one of the following is a list of Link types?",
    "options": [
     {
      "k": "A",
      "t": "List of Records, Separator, Catalog Type, Roles",
      "zh": "记录列表、分隔符、目录类型、角色"
     },
     {
      "k": "B",
      "t": "Assessment, List of Records, Separator, Timeline Page",
      "zh": "Assessment、记录列表、分隔符、时间线页面"
     },
     {
      "k": "C",
      "t": "List of Records, Content Page, Order, URL (from arguments:)",
      "zh": "记录列表、内容页面、顺序、URL（来自参数：）"
     },
     {
      "k": "D",
      "t": "Assessment, List of Records, Content Page, Roles",
      "zh": "Assessment、记录列表、内容页面、角色"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://docs.servicenow.com/bundle/geneva-servicenow-platform/page/administer/navigation_and_ui/reference/r_ModuleLinkTypes.html"
    ],
    "qZh": "Modules 必须具有链接类型。以下哪一项是链接类型列表？"
   },
   {
    "id": "p15",
    "q": "Which one of the following is true for a table with the `Allow configuration` Application Access option selected?",
    "options": [
     {
      "k": "A",
      "t": "Only the in scope application's scripts can create Business Rules for the table",
      "zh": "仅范围内应用程序的脚本可以为表创建业务规则"
     },
     {
      "k": "B",
      "t": "Any user with the application's user role can modify the application's scripts",
      "zh": "任何具有应用程序用户角色的用户都可以修改应用程序的脚本"
     },
     {
      "k": "C",
      "t": "Out of scope applications can create Business Rules for the table",
      "zh": "超出范围的应用程序可以为表创建业务规则"
     },
     {
      "k": "D",
      "t": "Out of scope applications can add new tables to the scoped application",
      "zh": "超出范围的应用程序可以向范围内的应用程序添加新表"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://community.servicenow.com/community?id=community_question&sys_id=1a721819dbfa23409a64e15b8a9619d2"
    ],
    "qZh": "对于选择了“允许配置”应用程序访问选项的表，以下哪一项是正确的？"
   },
   {
    "id": "p16",
    "q": "When working in the Form Designer, configuring the label of a field in a child table changes the label on which table(s)?",
    "options": [
     {
      "k": "A",
      "t": "base table",
      "zh": "基本表"
     },
     {
      "k": "B",
      "t": "child table",
      "zh": "child表"
     },
     {
      "k": "C",
      "t": "parent table",
      "zh": "父表"
     },
     {
      "k": "D",
      "t": "all tables",
      "zh": "所有表"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://community.servicenow.com/community?id=community_question&sys_id=7ddc4462dbe2b3840be6a345ca9619af"
    ],
    "qZh": "在表单设计器中工作时，配置子表中字段的标签会更改哪个表上的标签？"
   },
   {
    "id": "p17",
    "q": "Which one of the following is true?",
    "options": [
     {
      "k": "A",
      "t": "A UI Policy's Actions execute before the UI Policy's Scripts",
      "zh": "A UI 策略的操作在 UI 策略的脚本之前执行"
     },
     {
      "k": "B",
      "t": "The execution order for a UI Policy's Scripts and Actions is determined at runtime",
      "zh": "UI 策略的脚本和操作的执行顺序在运行时确定"
     },
     {
      "k": "C",
      "t": "A UI Policy's Scripts execute before the UI Policy's Actions",
      "zh": "A UI 策略的脚本在 UI 策略的操作之前执行"
     },
     {
      "k": "D",
      "t": "A UI Policy's Actions and Scripts execute at the same time",
      "zh": "A UI 策略的操作和脚本同时执行"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://community.servicenow.com/community?id=community_question&sys_id=5cf5d3f7db72f784f7fca851ca96199b"
    ],
    "qZh": "以下哪一项是正确的？"
   },
   {
    "id": "p18",
    "q": "Here is the Business Rule script template: This type of JavaScript function is known as:",
    "options": [
     {
      "k": "A",
      "t": "Constructor",
      "zh": "构造函数"
     },
     {
      "k": "B",
      "t": "Scoped",
      "zh": "具有作用域的"
     },
     {
      "k": "C",
      "t": "Anonymous",
      "zh": "匿名函数"
     },
     {
      "k": "D",
      "t": "Self-invoking",
      "zh": "自调用"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "这里是业务规则脚本模板：这种类型的 JavaScript 函数称为："
   },
   {
    "id": "p19",
    "q": "Which method call returns true only if the currently logged in user has the catalog_admin role and in no other case?",
    "options": [
     {
      "k": "A",
      "t": "g_user.hasRole('catalog_admin')",
      "zh": "g_user.hasRole('catalog_admin')"
     },
     {
      "k": "B",
      "t": "g_user.hasRoleExactly('catalog_admin')",
      "zh": "g_user.hasRoleExactly('catalog_admin')"
     },
     {
      "k": "C",
      "t": "g_user.hasRoleOnly('catalog_admin')",
      "zh": "g_user.hasRoleOnly('catalog_admin')"
     },
     {
      "k": "D",
      "t": "g_user.hasRoleFromList('catalog_admin')",
      "zh": "g_user.hasRoleFromList('catalog_admin')"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://community.servicenow.com/community?id=community_question&sys_id=dff705e6db7757c0d58ea345ca96196b"
    ],
    "qZh": "哪个方法调用仅在当前登录的用户具有catalog_admin角色时返回true，而在其他情况下不返回？"
   },
   {
    "id": "p20",
    "q": "There is a basic strategy when creating a Utils Script Include. Identify the step that does not belong.",
    "options": [
     {
      "k": "A",
      "t": "Identify the table",
      "zh": "识别表"
     },
     {
      "k": "B",
      "t": "Script the function(s)",
      "zh": "编写函数脚本"
     },
     {
      "k": "C",
      "t": "Create a class",
      "zh": "创建一个类"
     },
     {
      "k": "D",
      "t": "Create a prototype object from the new class",
      "zh": "从新类创建原型对象"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "创建 Utils Script Include 时有一个基本策略。识别不属于的步骤。"
   },
   {
    "id": "p21",
    "q": "Which roles grant access to source control repository operations such as importing applications from source control, or linking an application to source control? (Choose two.)",
    "options": [
     {
      "k": "A",
      "t": "source_control",
      "zh": "source_control"
     },
     {
      "k": "B",
      "t": "source_control_admin",
      "zh": "source_control_admin"
     },
     {
      "k": "C",
      "t": "admin",
      "zh": "管理员"
     },
     {
      "k": "D",
      "t": "git_admin",
      "zh": "git_admin"
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
    ],
    "qZh": "哪些角色授予对源代码控制存储库操作的访问权限，例如从源代码控制导入应用程序或将应用程序链接到源代码控制？ （选择两个。）"
   },
   {
    "id": "p22",
    "q": "When configuring the content of an Email Notification, which syntax should be used to reference the properties of an event triggering the Notification?",
    "options": [
     {
      "k": "A",
      "t": "${event.<property name>}",
      "zh": "${事件.<属性名称>}"
     },
     {
      "k": "B",
      "t": "${current.<property name>}",
      "zh": "${当前。<属性名称>}"
     },
     {
      "k": "C",
      "t": "${<property name>.getDisplayValue()}",
      "zh": "${<属性名称>.getDisplayValue()}"
     },
     {
      "k": "D",
      "t": "${gs.<property name>}",
      "zh": "${gs.<属性名称>}"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://community.servicenow.com/community?id=community_question&sys_id=e017cbe5db1cdbc01dcaf3231f9619a3"
    ],
    "qZh": "配置电子邮件通知的内容时，应使用哪种语法来引用触发通知的事件的属性？"
   },
   {
    "id": "p23",
    "q": "Which one of the following is true for a Script Include with a Protection Policy value of Protected?",
    "options": [
     {
      "k": "A",
      "t": "Any user with the protected_edit role can see and edit the Script Include",
      "zh": "任何具有 protected_edit 角色的用户都可以查看和编辑脚本包含"
     },
     {
      "k": "B",
      "t": "The Protection policy option can only be enabled by a user with the admin role",
      "zh": "保护策略选项只能由具有管理员角色的用户启用"
     },
     {
      "k": "C",
      "t": "The Protection Policy is applied only if the glide.app.apply_protection system property value is true",
      "zh": "仅当 glide.app.apply_protection 系统属性值为 true 时才应用保护策略"
     },
     {
      "k": "D",
      "t": "The Protection Policy is applied only if the application is downloaded from the ServiceNow App Store",
      "zh": "仅当从 ServiceNow App Store 下载应用程序时才应用保护策略"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "对于保护策略值为“受保护”的脚本包含，下列哪一项是正确的？"
   },
   {
    "id": "p24",
    "q": "Which one of the following is true for GlideUser (g_user) methods?",
    "options": [
     {
      "k": "A",
      "t": "Can be used in Client Scripts and UI Policies only",
      "zh": "只能在客户端脚本和 UI 策略中使用"
     },
     {
      "k": "B",
      "t": "Can be used in Business Rules only",
      "zh": "只能在业务规则中使用"
     },
     {
      "k": "C",
      "t": "Can be used in Client Scripts, UI Policies, and UI Actions",
      "zh": "可用于客户端脚本、UI 策略和 UI 操作"
     },
     {
      "k": "D",
      "t": "Can be used in Business Rules, and Scripts Includes",
      "zh": "可以在业务规则和脚本中使用"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://developer.servicenow.com/dev.do#!/reference/api/newyork/client/c_GlideUserAPI"
    ],
    "qZh": "对于 GlideUser (g_user) 方法，以下哪一项是正确的？"
   },
   {
    "id": "p25",
    "q": "When configuring a module, what does the Override application menu roles configuration option do?",
    "options": [
     {
      "k": "A",
      "t": "Users with the module role but without access to the application menu access the module",
      "zh": "具有模块角色但无权访问应用程序菜单的用户访问模块"
     },
     {
      "k": "B",
      "t": "Self-Service users can access the module even though they do not have roles",
      "zh": "自助服务用户即使没有角色也可以访问该模块\n即使访问控制通常会阻止访问，"
     },
     {
      "k": "C",
      "t": "Admin is given access to the module even if Access Controls would ordinarily prevent access",
      "zh": "Admin 仍有权访问该模块"
     },
     {
      "k": "D",
      "t": "Users with access to the application menu can see the module even if they don't have the module role",
      "zh": "有权访问应用程序菜单的用户即使没有模块角色也可以看到该模块"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://hi.service-now.com/kb_view.do?sysparm_article=KB0716421"
    ],
    "qZh": "配置模块时，覆盖应用程序菜单角色配置选项有什么作用？"
   },
   {
    "id": "p26",
    "q": "Which platform feature can be used to determine the relationships between field in an Import Set table to field in an existing ServiceNow table?",
    "options": [
     {
      "k": "A",
      "t": "Business Service Management Map",
      "zh": "业务服务管理地图"
     },
     {
      "k": "B",
      "t": "Data Sources",
      "zh": "数据源"
     },
     {
      "k": "C",
      "t": "Transform Map",
      "zh": "变换贴图"
     },
     {
      "k": "D",
      "t": "CI Relationship Builder",
      "zh": "CI 关系构建器"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://community.servicenow.com/community?id=community_question&sys_id=69fc8369db9cdbc01dcaf3231f961935"
    ],
    "qZh": "哪个平台功能可用于确定导入集表中的字段与现有 ServiceNow 表中的字段之间的关系？"
   },
   {
    "id": "p27",
    "q": "When configuring a REST Message, the Endpoint is:",
    "options": [
     {
      "k": "A",
      "t": "The commands to the REST script to stop execution",
      "zh": "REST脚本停止执行的命令"
     },
     {
      "k": "B",
      "t": "The URI of the data to be accessed, queried, or modified",
      "zh": "要访问、查询或修改的数据的URI"
     },
     {
      "k": "C",
      "t": "Information about the format of the returned data",
      "zh": "返回数据格式信息"
     },
     {
      "k": "D",
      "t": "The response from the provider indicating there is no data to send back",
      "zh": "来自提供商的响应，表明没有数据要发回"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://docs.servicenow.com/bundle/orlando-application-development/page/integrate/outbound-rest/reference/r_RESTMessageElements.html"
    ],
    "qZh": "配置 REST 消息时，端点为："
   },
   {
    "id": "p28",
    "q": "When evaluating Access Controls, ServiceNow searches and evaluates:",
    "options": [
     {
      "k": "A",
      "t": "Only for matches on the current table",
      "zh": "仅适用于当前表上的匹配"
     },
     {
      "k": "B",
      "t": "Only for matches on the current field",
      "zh": "仅适用于当前字段的匹配"
     },
     {
      "k": "C",
      "t": "From the most specific match to the most generic match",
      "zh": "从最具体的匹配到最通用的匹配"
     },
     {
      "k": "D",
      "t": "From the most generic match to the most specific match",
      "zh": "从最通用的匹配到最具体的匹配"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "评估访问控制时，ServiceNow 搜索并评估："
   },
   {
    "id": "p29",
    "q": "In a Business Rule, which one of the following returns true if the currently logged in user has the admin role?",
    "options": [
     {
      "k": "A",
      "t": "g_form.hasRoleExactly('admin')",
      "zh": "g_form.hasRoleExactly('admin')"
     },
     {
      "k": "B",
      "t": "gs.hasRole('admin')",
      "zh": "gs.hasRole('admin')"
     },
     {
      "k": "C",
      "t": "g_form.hasRole('admin')",
      "zh": "g_form.hasRole('admin')"
     },
     {
      "k": "D",
      "t": "gs.hasRoleExactly('admin')",
      "zh": "gs.hasRoleExactly('admin')"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "在业务规则中，如果当前登录的用户具有管理员角色，则以下哪一项返回 true？"
   },
   {
    "id": "p30",
    "q": "From the list below, identify one reason an application might NOT be a good fit with ServiceNow. The application:",
    "options": [
     {
      "k": "A",
      "t": "Needs workflow to manage processes",
      "zh": "需要工作流程来管理流程"
     },
     {
      "k": "B",
      "t": "Requires as-is use of low-level programming libraries",
      "zh": "需要按原样使用低级编程库"
     },
     {
      "k": "C",
      "t": "Requires reporting capabilities",
      "zh": "需要报告功能"
     },
     {
      "k": "D",
      "t": "Uses forms extensively to interact with data",
      "zh": "广泛使用表单与数据交互"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "从下面的列表中，找出应用程序可能不适合 ServiceNow 的一个原因。应用："
   },
   {
    "id": "p31",
    "q": "Identify the incorrect statement about Delegated Development in ServiceNow.",
    "options": [
     {
      "k": "A",
      "t": "Administrators can grant non-admin users the ability to develop global applications.",
      "zh": "管理员可以授予非管理员用户开发全局应用程序的能力。"
     },
     {
      "k": "B",
      "t": "Administrators can specify which application file types the developer can access.",
      "zh": "管理员可以指定开发人员可以访问哪些应用程序文件类型。"
     },
     {
      "k": "C",
      "t": "Administrators can grant the developer access to script fields.",
      "zh": "管理员可以授予开发人员访问脚本字段的权限。"
     },
     {
      "k": "D",
      "t": "Administrators can grant the developer access to security records.",
      "zh": "管理员可以授予开发人员访问安全记录的权限。"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://docs.servicenow.com/bundle/orlando-application-development/page/build/applications/concept/c_DelegatedDevelopment.html"
    ],
    "qZh": "指出ServiceNow中有关委托开发的错误表述。"
   },
   {
    "id": "p32",
    "q": "One of the uses of the ServiceNow REST API Explorer is:",
    "options": [
     {
      "k": "A",
      "t": "Practice using REST to interact with public data providers",
      "zh": "练习使用 REST 与公共数据提供者交互"
     },
     {
      "k": "B",
      "t": "Find resources on the web for learning about REST",
      "zh": "在网络上查找资源以了解 REST"
     },
     {
      "k": "C",
      "t": "Convert SOAP Message functions to REST methods",
      "zh": "将 SOAP 消息函数转换为 REST 方法"
     },
     {
      "k": "D",
      "t": "Create sample code for sending REST requests to ServiceNow",
      "zh": "创建用于向 ServiceNow 发送 REST 请求的示例代码"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://developer.servicenow.com/dev.do#!/learn/courses/newyork/app_store_learnv2_rest_newyork_rest_integrations/"
    ],
    "qZh": "ServiceNow REST API Explorer 的用途之一是："
   },
   {
    "id": "p33",
    "q": "Which one of the following is true regarding Application Scope?",
    "options": [
     {
      "k": "A",
      "t": "All applications are automatically part of the Global scope",
      "zh": "所有应用程序自动成为全局范围的一部分"
     },
     {
      "k": "B",
      "t": "Applications downloaded from 3 party ServiceNow application developers cannot have naming conflicts rd",
      "zh": "从3方ServiceNow应用程序开发人员下载的应用程序不能有命名冲突rd"
     },
     {
      "k": "C",
      "t": "Any developer can edit any application",
      "zh": "任何开发人员都可以编辑任何应用程序"
     },
     {
      "k": "D",
      "t": "Developers can choose the prefix for a scope's namespace",
      "zh": "开发人员可以选择范围命名空间的前缀"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "关于应用范围，以下哪一项是正确的？"
   },
   {
    "id": "p34",
    "q": "Which one of the following is the baseline behavior of a table in a privately-scoped application?",
    "options": [
     {
      "k": "A",
      "t": "The table and its data are not accessible using web services",
      "zh": "无法使用 Web 服务访问该表及其数据"
     },
     {
      "k": "B",
      "t": "Any Business Rule can read, write, delete, and update from the table",
      "zh": "任何业务规则都可以从表中读取、写入、删除和更新"
     },
     {
      "k": "C",
      "t": "Only artifacts in the table's application can read from the table",
      "zh": "只有表应用程序中的工件可以从表中读取"
     },
     {
      "k": "D",
      "t": "All application scopes can read from the table",
      "zh": "所有应用范围都可以从表中读取"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "以下哪一项是私有范围应用程序中表的基线行为？"
   },
   {
    "id": "p35",
    "q": "Which one of the following is NOT a purpose of application scoping?",
    "options": [
     {
      "k": "A",
      "t": "Provide a relationship between application artifacts",
      "zh": "提供应用程序工件之间的关系"
     },
     {
      "k": "B",
      "t": "Provide a way of tracking the user who developed an application",
      "zh": "提供一种跟踪开发应用程序的用户的方法"
     },
     {
      "k": "C",
      "t": "Provide a namespace (prefix and scope name) to prevent cross application name collisions",
      "zh": "提供命名空间（前缀和范围名称）以防止跨应用程序名称冲突"
     },
     {
      "k": "D",
      "t": "Provide controls for how scripts from another scope can alter tables in a scoped application",
      "zh": "提供对来自另一个作用域的脚本如何更改作用域应用程序中的表的控制"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "以下哪一项不是应用程序范围界定的目的？"
   },
   {
    "id": "p36",
    "q": "It is best practice to define the business requirements and the process(es) an application will manage as part of the application development plan. What are some of the considerations to document as part of the business process?",
    "options": [
     {
      "k": "A",
      "t": "Business problem, data input/output, users/stakeholders, and process steps",
      "zh": "业务问题、数据输入/输出、用户/利益相关者和流程步骤"
     },
     {
      "k": "B",
      "t": "Business problem, data input/output, project schedule, and process steps",
      "zh": "业务问题、数据输入/输出、项目进度和流程步骤"
     },
     {
      "k": "C",
      "t": "Business problem, data input/output, users/stakeholders, and database capacity",
      "zh": "业务问题、数据输入/输出、用户/利益相关者和数据库容量"
     },
     {
      "k": "D",
      "t": "Business problem, users/stakeholders, available licenses, and database capacity",
      "zh": "业务问题、用户/利益相关者、可用许可证和数据库容量"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "最好的做法是定义业务需求和应用程序将管理的流程作为应用程序开发计划的一部分。作为业务流程的一部分需要记录哪些注意事项？"
   },
   {
    "id": "p37",
    "q": "Which of the following statements does NOT apply when extending an existing table?",
    "options": [
     {
      "k": "A",
      "t": "The parent table's Access Controls are evaluated when determining access to the new table's records and fields",
      "zh": "在确定对新表记录和字段的访问权限时评估父表的访问控制"
     },
     {
      "k": "B",
      "t": "The new table inherits the functionality built into the parent table",
      "zh": "新表继承了父表中内置的功能"
     },
     {
      "k": "C",
      "t": "The new table inherits all of the fields from the parent table",
      "zh": "新表继承父表的所有字段"
     },
     {
      "k": "D",
      "t": "You must script and configure all required behaviors",
      "zh": "您必须编写脚本并配置所有必需的行为"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://developer.servicenow.com/dev.do#!/learn/learning-plans/orlando/new_to_servicenow/app_store_learnv2_buildneedit_orlando_tables"
    ],
    "qZh": "扩展现有表时，以下哪项语句不适用？"
   },
   {
    "id": "p38",
    "q": "Which of the following CANNOT be debugged using the Field Watcher?",
    "options": [
     {
      "k": "A",
      "t": "Business Rules",
      "zh": "业务规则"
     },
     {
      "k": "B",
      "t": "Script Includes",
      "zh": "Script 包括"
     },
     {
      "k": "C",
      "t": "Client Scripts",
      "zh": "Client 脚本"
     },
     {
      "k": "D",
      "t": "Access Controls",
      "zh": "访问控制"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://docs.servicenow.com/bundle/orlando-application-development/page/script/debugging/concept/c_FieldWatcher.html"
    ],
    "qZh": "以下哪一项不能使用现场观察器进行调试？"
   },
   {
    "id": "p39",
    "q": "Which objects can be used in Inbound Action scripts?",
    "options": [
     {
      "k": "A",
      "t": "current and previous",
      "zh": "当前和上一个"
     },
     {
      "k": "B",
      "t": "current and email",
      "zh": "当前和电子邮件"
     },
     {
      "k": "C",
      "t": "current and event",
      "zh": "当前和事件"
     },
     {
      "k": "D",
      "t": "current and producer",
      "zh": "当前和生产者"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "哪些对象可以在入站操作脚本中使用？"
   },
   {
    "id": "p40",
    "q": "Which one of the following is part of the client-side scripting API?",
    "options": [
     {
      "k": "A",
      "t": "workflow.scratchpad",
      "zh": "workflow.scratchpad"
     },
     {
      "k": "B",
      "t": "GlideUser object (g_user)",
      "zh": "GlideUser对象（g_user）"
     },
     {
      "k": "C",
      "t": "current and previous objects",
      "zh": "当前和以前的对象"
     },
     {
      "k": "D",
      "t": "GlideSystem object (gs)",
      "zh": "GlideSystem 对象 (gs)"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "以下哪一项是客户端脚本 API 的一部分？"
   },
   {
    "id": "p41",
    "q": "Application developers configure ServiceNow using industry standard JavaScript to`�",
    "options": [
     {
      "k": "A",
      "t": "Enable the right-click to edit the context menus on applications in the navigator",
      "zh": "启用右键单击以编辑导航器中应用程序的上下文菜单"
     },
     {
      "k": "B",
      "t": "Extend and add functionality",
      "zh": "扩展和添加功能"
     },
     {
      "k": "C",
      "t": "Customize the organization's company logo and banner text",
      "zh": "自定义组织的公司徽标和横幅文本"
     },
     {
      "k": "D",
      "t": "Configure the outgoing email display name",
      "zh": "配置外发电子邮件显示名称"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "应用程序开发人员使用行业标准 JavaScript 配置 ServiceNow 以“"
   },
   {
    "id": "p42",
    "q": "How many applications menus can an application have?",
    "options": [
     {
      "k": "A",
      "t": "3, one for an application's user modules, one for an application's administrator modules, and one for the ServiceNow administrator's modules",
      "zh": "3，一个用于应用程序的用户模块，一个用于应用程序的管理员模块，一个用于 ServiceNow 管理员模块"
     },
     {
      "k": "B",
      "t": "As many as the application design requires",
      "zh": "与应用程序设计要求一样多"
     },
     {
      "k": "C",
      "t": "2, one for an application's user modules and one for an application's administrator modules",
      "zh": "2，一个用于应用程序的用户模块，一个用于应用程序的管理员模块"
     },
     {
      "k": "D",
      "t": "1, which is used for all application modules",
      "zh": "1，用于所有应用模块"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://docs.servicenow.com/bundle/orlando-platform-user-interface/page/administer/navigation-and-ui/task/t_CreateAnApplicationMenu.html"
    ],
    "qZh": "一个应用程序可以有多少个应用程序菜单？"
   },
   {
    "id": "p43",
    "q": "The source control operation used to store local changes on an instance for later application is called a(n) <blank>.",
    "options": [
     {
      "k": "A",
      "t": "Branch",
      "zh": "分支"
     },
     {
      "k": "B",
      "t": "Tag",
      "zh": "标签"
     },
     {
      "k": "C",
      "t": "Stash",
      "zh": "暂存"
     },
     {
      "k": "D",
      "t": "Update set",
      "zh": "更新集"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://docs.servicenow.com/bundle/orlando-application-development/page/build/applications/task/t_StashLocalChanges.html"
    ],
    "qZh": "用于存储实例上的本地更改以供以后应用程序的源代码控制操作称为 a(n) <blank>。"
   },
   {
    "id": "p44",
    "q": "What syntax is used in a Record Producer script to access values from Record Producer form fields?",
    "options": [
     {
      "k": "A",
      "t": "producer.field_name",
      "zh": "Producer.field_name"
     },
     {
      "k": "B",
      "t": "producer.variablename",
      "zh": "生产者.变量名"
     },
     {
      "k": "C",
      "t": "current.variable_name",
      "zh": "current.variable_name"
     },
     {
      "k": "D",
      "t": "current.field_name",
      "zh": "current.field_name"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://community.servicenow.com/community?id=community_question&sys_id=cc3803addb1cdbc01dcaf3231f9619b6"
    ],
    "qZh": "记录制作者脚本中使用什么语法来访问记录制作者表单字段中的值？"
   },
   {
    "id": "p45",
    "q": "Which of the following methods prints a message on a blue background to the top of the current form by default?",
    "options": [
     {
      "k": "A",
      "t": "g_form.addInfoMsg()",
      "zh": "g_form.addInfoMsg()"
     },
     {
      "k": "B",
      "t": "g_form.addInfoMessage()",
      "zh": "g_form.addInfoMessage()"
     },
     {
      "k": "C",
      "t": "g_form.showFieldMessage()",
      "zh": "g_form.showFieldMessage()"
     },
     {
      "k": "D",
      "t": "g_form.showFieldMsg()",
      "zh": "g_form.showFieldMsg()"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://docs.servicenow.com/bundle/orlando-application-development/page/script/useful-scripts/reference/r_DisplayFieldMessages.html"
    ],
    "qZh": "默认情况下，以下哪种方法会在当前表单的顶部打印一条蓝色背景的消息？"
   },
   {
    "id": "p46",
    "q": "A scoped application containing Flow Designer content dedicated to a particular application is called a(n):",
    "options": [
     {
      "k": "A",
      "t": "Spoke",
      "zh": "集成功能包（Spoke）"
     },
     {
      "k": "B",
      "t": "Bundle",
      "zh": "应用包"
     },
     {
      "k": "C",
      "t": "Action",
      "zh": "动作"
     },
     {
      "k": "D",
      "t": "Flow",
      "zh": "流程"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://community.servicenow.com/community?id=community_blog&sys_id=7b3af354db93ab80afc902d5ca9619bc"
    ],
    "qZh": "A 包含专用于特定应用程序的 Flow Designer 内容的范围应用程序称为 a(n)："
   },
   {
    "id": "p47",
    "q": "What is a Module?",
    "options": [
     {
      "k": "A",
      "t": "The functionality within an application menu such as opening a page in the content frame or a separate tab or window",
      "zh": "应用程序菜单中的功能，例如在内容框架中打开页面或单独的选项卡或窗口"
     },
     {
      "k": "B",
      "t": "A group of menus, or pages, providing related information and functionality to end-users",
      "zh": "A 菜单或页面组，向最终用户提供相关信息和功能"
     },
     {
      "k": "C",
      "t": "A way of helping users quickly access information and services by filtering the items in the Application Navigator",
      "zh": "A 通过过滤 Application Navigator 中的项目来帮助用户快速访问信息和服务的方法"
     },
     {
      "k": "D",
      "t": "A web-based way of providing software to end-users",
      "zh": "A 向最终用户提供软件的基于 Web 的方式"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://docs.servicenow.com/bundle/orlando-platform-user-interface/page/administer/navigation-and-ui/task/t_CreateAModule.html"
    ],
    "qZh": "什么是模块？"
   },
   {
    "id": "p48",
    "q": "Which source control operation is available from BOTH Studio and the Git Repository?",
    "options": [
     {
      "k": "A",
      "t": "Create Branch",
      "zh": "创建分支"
     },
     {
      "k": "B",
      "t": "Apply Remote Changes",
      "zh": "应用远程更改"
     },
     {
      "k": "C",
      "t": "Stash Local Changes",
      "zh": "Stash 本地更改"
     },
     {
      "k": "D",
      "t": "Edit Repository Configurations",
      "zh": "Edit 存储库配置"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "Studio 和 Git 存储库都提供哪些源代码管理操作？"
   },
   {
    "id": "p49",
    "q": "Which one of the following is NOT required to link a ServiceNow application to a Git repository?",
    "options": [
     {
      "k": "A",
      "t": "Password",
      "zh": "密码"
     },
     {
      "k": "B",
      "t": "URL",
      "zh": "URL"
     },
     {
      "k": "C",
      "t": "User name",
      "zh": "用户名"
     },
     {
      "k": "D",
      "t": "Application name",
      "zh": "应用程序名称"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://docs.servicenow.com/bundle/orlando-application-development/page/build/applications/task/t_LinkAnApplicationToSourceControl.html"
    ],
    "qZh": "将 ServiceNow 应用程序链接到 Git 存储库不需要以下哪一项？"
   },
   {
    "id": "p50",
    "q": "Which Report Type(s) can be created by right-clicking on a column header in a table's list?",
    "options": [
     {
      "k": "A",
      "t": "Bar Chart, Pie Chart, Histogram, and Line",
      "zh": "条形图、饼图、直方图和折线图"
     },
     {
      "k": "B",
      "t": "Bar Chart",
      "zh": "条形图"
     },
     {
      "k": "C",
      "t": "Bar Chart, Pie Chart, and Histogram",
      "zh": "条形图、饼图和直方图"
     },
     {
      "k": "D",
      "t": "Bar Chart and Pie Chart",
      "zh": "条形图和饼图"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "通过右键单击表列表中的列标题可以创建哪些报告类型？"
   },
   {
    "id": "p51",
    "q": "Which one of the following is NOT a method used for logging messages in a server-side script for a privately-scoped application?",
    "options": [
     {
      "k": "A",
      "t": "gs.log()",
      "zh": "gs.log()"
     },
     {
      "k": "B",
      "t": "gs.error()",
      "zh": "gs.error()"
     },
     {
      "k": "C",
      "t": "gs.warn()",
      "zh": "gs.warn()"
     },
     {
      "k": "D",
      "t": "gs.debug()",
      "zh": "gs.debug()"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://community.servicenow.com/community?id=community_question&sys_id=bd71cb29db98dbc01dcaf3231f9619c6"
    ],
    "qZh": "以下哪一项不是用于在私有范围应用程序的服务器端脚本中记录消息的方法？"
   },
   {
    "id": "p52",
    "q": "If the Create module field is selected when creating a table, what is the new module's default behavior?",
    "options": [
     {
      "k": "A",
      "t": "Open an empty form so new records can be created",
      "zh": "打开一个空表单，以便创建新记录"
     },
     {
      "k": "B",
      "t": "Open a link to a wiki article with instructions on how to customize the behavior of the new module",
      "zh": "打开 wiki 文章的链接，其中包含有关如何自定义新模块行为的说明"
     },
     {
      "k": "C",
      "t": "Display an empty homepage for the application",
      "zh": "显示应用程序的空主页"
     },
     {
      "k": "D",
      "t": "Display a list of all records from the table",
      "zh": "显示表中所有记录的列表"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "如果创建表时选择“创建模块”字段，则新模块的默认行为是什么？"
   },
   {
    "id": "p53",
    "q": "How must Application Access be configured to prevent all other private application scopes from creating configuration records on an application's data tables?",
    "options": [
     {
      "k": "A",
      "t": "You must create Access Controls to prevent all other application scopes from creating configuration records on an application's data tables rather than using Application Access",
      "zh": "您必须创建访问控制以防止所有其他应用程序范围在应用程序的数据表上创建配置记录，而不是使用应用程序访问"
     },
     {
      "k": "B",
      "t": "Set the Accessible from field value to All application scopes and de-select the Can create option",
      "zh": "将“可访问自”字段值设置为“所有应用程序范围”并取消选择“可以创建”选项"
     },
     {
      "k": "C",
      "t": "Set the Accessible from field value to This application scope only and de-select the Allow access to this table via web services option",
      "zh": "将“可访问自”字段值设置为“仅此应用程序范围”，并取消选择“允许通过 Web 服务访问此表”选项"
     },
     {
      "k": "D",
      "t": "Set the Accessible from field value to This application scope only",
      "zh": "将可访问自字段值设置为仅此应用程序范围"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://docs.servicenow.com/bundle/orlando-application-development/page/build/applications/concept/c_ExampleGrantingAccessToConfigRecs.html"
    ],
    "qZh": "必须如何配置应用程序访问才能防止所有其他私有应用程序范围在应用程序的数据表上创建配置记录？"
   },
   {
    "id": "p54",
    "q": "What are some of the benefits of extending an existing table such as the Task table when creating a new application?\na) You can repurpose existing fields by simply changing the label.\nb) Use existing fields with no modifications.\nc) Existing logic from the parent table will be automatically applied to the new table.\nd) All of the parent table records are copied to the new table.",
    "options": [
     {
      "k": "A",
      "t": "a, b, c, and d",
      "zh": "a、b、c 和 d"
     },
     {
      "k": "B",
      "t": "a and b",
      "zh": "a 和 b"
     },
     {
      "k": "C",
      "t": "b and c",
      "zh": "b 和 c"
     },
     {
      "k": "D",
      "t": "a, b, and c",
      "zh": "a、b 和 c"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "创建新应用程序时扩展现有表（例如任务表）有哪些好处？\na) 您只需更改标签即可重新调整现有字段的用途。\nb) 使用现有字段而不进行修改。\nc) 父表中的现有逻辑将自动应用于新表。\nd) 所有父表记录都复制到新表中。"
   },
   {
    "id": "p55",
    "q": "When configuring an Access Control which has no condition or script, which one of the following statements is NOT true?",
    "options": [
     {
      "k": "A",
      "t": "table.*will grant access to every field in a record",
      "zh": "table.*将授予对记录中每个字段的访问权限"
     },
     {
      "k": "B",
      "t": "table.None will grant access to every record on the table",
      "zh": "table.None 将授予对表中每条记录的访问权限"
     },
     {
      "k": "C",
      "t": "table.field will grant access to a specific field in a record",
      "zh": "table.field 将授予对记录中特定字段的访问权限"
     },
     {
      "k": "D",
      "t": "table.id will grant access to a specific record on the table",
      "zh": "table.id 将授予对表中特定记录的访问权限"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "配置没有条件或脚本的访问控制时，以下哪一项陈述不正确？"
   },
   {
    "id": "p56",
    "q": "Which of the following methods are useful in Access Control scripts?",
    "options": [
     {
      "k": "A",
      "t": "g_user.hasRole() and current.isNewRecord()",
      "zh": "g_user.hasRole() 和 current.isNewRecord()"
     },
     {
      "k": "B",
      "t": "gs.hasRole() and current.isNewRecord()",
      "zh": "gs.hasRole() 和 current.isNewRecord()"
     },
     {
      "k": "C",
      "t": "g_user.hasRole() and current.isNew()",
      "zh": "g_user.hasRole() 和 current.isNew()"
     },
     {
      "k": "D",
      "t": "gs.hasRole() and current.isNew()",
      "zh": "gs.hasRole() 和 current.isNew()"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "http://servicenowmypath.blogspot.com/2017/"
    ],
    "qZh": "以下哪些方法在访问控制脚本中有用？"
   },
   {
    "id": "p57",
    "q": "Which one of the following client-side scripts apply to Record Producers?",
    "options": [
     {
      "k": "A",
      "t": "Catalog Client Scripts and Catalog UI Policies",
      "zh": "Catalog 客户端脚本和目录 UI 策略"
     },
     {
      "k": "B",
      "t": "UI Scripts and UI Actions",
      "zh": "UI 脚本和 UI 操作"
     },
     {
      "k": "C",
      "t": "UI Scripts and Record Producer Scripts",
      "zh": "UI 脚本和记录制作者脚本"
     },
     {
      "k": "D",
      "t": "Client Scripts and UI Policies",
      "zh": "Client 脚本和 UI 策略"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://docs.servicenow.com/bundle/orlando-application-development/page/script/client-scripts/concept/c_CatalogClientScriptCreation.html"
    ],
    "qZh": "以下哪一项客户端脚本适用于唱片制作人？"
   },
   {
    "id": "p58",
    "q": "When a ServiceNow instance requests information from a web service, ServiceNow is the web service:",
    "options": [
     {
      "k": "A",
      "t": "Publisher",
      "zh": "发布者"
     },
     {
      "k": "B",
      "t": "Specialist",
      "zh": "专家"
     },
     {
      "k": "C",
      "t": "Provider",
      "zh": "服务提供者"
     },
     {
      "k": "D",
      "t": "Consumer",
      "zh": "服务消费者"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://docs.servicenow.com/bundle/orlando-application-development/page/integrate/web-services/reference/r_AvailableWebServices.html"
    ],
    "qZh": "当ServiceNow实例向Web服务请求信息时，ServiceNow是Web服务："
   },
   {
    "id": "p59",
    "q": "Which one of the following is the fastest way to create and configure a Record Producer?",
    "options": [
     {
      "k": "A",
      "t": "Create a Catalog Category, open the category, and select the Add New Record Producer button",
      "zh": "创建目录类别，打开类别，然后选择添加新记录生成器按钮"
     },
     {
      "k": "B",
      "t": "Use the Record Producer module then add and configure all variables manually",
      "zh": "使用记录生成器模块，然后手动添加和配置所有变量"
     },
     {
      "k": "C",
      "t": "Open the table in the Table records and select the Add to Service Catalog Related Link",
      "zh": "打开表记录中的表并选择添加到服务目录相关链接"
     },
     {
      "k": "D",
      "t": "Open the table's form, right-click on the form header, and select the Create Record Producer menu item",
      "zh": "打开表的窗体，右键单击窗体标题，然后选择“创建记录生成器”菜单项"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "以下哪一项是创建和配置记录生成器的最快方法？"
   },
   {
    "id": "p60",
    "q": "Which objects can you use in a Scheduled Script Execution (Scheduled Job) script?",
    "options": [
     {
      "k": "A",
      "t": "GlideRecord and current",
      "zh": "GlideRecord 和当前"
     },
     {
      "k": "B",
      "t": "GlideUser and GlideRecord",
      "zh": "GlideUser 和 GlideRecord"
     },
     {
      "k": "C",
      "t": "GlideSystem and GlideRecord",
      "zh": "GlideSystem 和 GlideRecord"
     },
     {
      "k": "D",
      "t": "GlideSystem and current",
      "zh": "GlideSystem 和当前"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://docs.servicenow.com/bundle/orlando-application-development/page/script/useful-scripts/concept/c_UsefulSchedulingScripts.html"
    ],
    "qZh": "可以在计划脚本执行（计划作业）脚本中使用哪些对象？"
   },
   {
    "id": "p61",
    "q": "Can inherited fields be deleted from a table?",
    "options": [
     {
      "k": "A",
      "t": "Yes, select the red X in the left-most column in the table definition",
      "zh": "是，选择表定义中最左边一列的红色X"
     },
     {
      "k": "B",
      "t": "Yes, but only if they are text fields",
      "zh": "是，但前提是它们是文本字段"
     },
     {
      "k": "C",
      "t": "Yes, but only if there has never been any saved field data",
      "zh": "是，但前提是从未保存过任何现场数据"
     },
     {
      "k": "D",
      "t": "No, inherited fields cannot be deleted from a child table",
      "zh": "否，无法从子表中删除继承字段"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://community.servicenow.com/community?id=community_question&sys_id=691888a9db12ff004819fb24399619f8"
    ],
    "qZh": "可以从表中删除继承的字段吗？"
   },
   {
    "id": "p62",
    "q": "What is the purpose of the Application Picker?",
    "options": [
     {
      "k": "A",
      "t": "Select an application to run",
      "zh": "选择要运行的应用程序"
     },
     {
      "k": "B",
      "t": "Select an application as a favorite in the Application Navigator",
      "zh": "在应用程序导航器中选择一个应用程序作为收藏夹"
     },
     {
      "k": "C",
      "t": "Choose an application to edit and set the Application Scope",
      "zh": "选择要编辑的应用程序并设置应用程序范围"
     },
     {
      "k": "D",
      "t": "Choose an application to download and install",
      "zh": "选择要下载并安装的应用程序"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://docs.servicenow.com/bundle/paris-application-development/page/build/applications/reference/r_ManagingApplications.html"
    ],
    "qZh": "应用程序选取器的用途是什么？"
   },
   {
    "id": "p63",
    "q": "What are Application Files in a ServiceNow application?",
    "options": [
     {
      "k": "A",
      "t": "An XML export of an application's table records",
      "zh": "应用程序表记录的 XML 导出"
     },
     {
      "k": "B",
      "t": "CSV files containing data imported into an application",
      "zh": "CSV 文件包含导入到应用程序中的数据"
     },
     {
      "k": "C",
      "t": "ServiceNow artifacts comprising an application",
      "zh": "ServiceNow 包含应用程序的工件\n应用程序更新集的"
     },
     {
      "k": "D",
      "t": "XML exports of an application's Update Set",
      "zh": "XML 导出"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://docs.servicenow.com/bundle/paris-application-development/page/build/applications/concept/c_ApplicationFiles.html"
    ],
    "qZh": "ServiceNow 应用程序中的应用程序文件是什么？"
   },
   {
    "id": "p64",
    "q": "Which one of the following is NOT true for Modules?",
    "options": [
     {
      "k": "A",
      "t": "Modules open content pages",
      "zh": "Modules打开内容页面"
     },
     {
      "k": "B",
      "t": "Access to Modules is controlled with roles",
      "zh": "对模块的访问由角色控制"
     },
     {
      "k": "C",
      "t": "Every Module must be part of an Application Menu",
      "zh": "每个模块都必须是应用程序菜单的一部分"
     },
     {
      "k": "D",
      "t": "Every Module must be associated with a table",
      "zh": "每个模块必须与一个表关联"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://community.servicenow.com/community?id=community_question&sys_id=bf40c435db7abf80414eeeb5ca9619b3"
    ],
    "qZh": "对于模块，以下哪一项不正确？"
   },
   {
    "id": "p65",
    "q": "A graphical view of relationships among tables is a <blank>.",
    "options": [
     {
      "k": "A",
      "t": "Schema map",
      "zh": "Schema 地图"
     },
     {
      "k": "B",
      "t": "Dependency view",
      "zh": "依赖关系视图"
     },
     {
      "k": "C",
      "t": "Graphical User Interface",
      "zh": "图形用户界面"
     },
     {
      "k": "D",
      "t": "Map source report",
      "zh": "Map源报告"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://docs.servicenow.com/bundle/paris-platform-administration/page/administer/table-administration/concept/c_TableAdministration.html"
    ],
    "qZh": "表之间关系的图形视图是<空白>。"
   },
   {
    "id": "p66",
    "q": "Which one of the following is true for the Application Picker?",
    "options": [
     {
      "k": "A",
      "t": "All custom application scope and the Global scope appear in the Application Picker",
      "zh": "所有自定义应用程序范围和全局范围都出现在应用程序选择器中"
     },
     {
      "k": "B",
      "t": "All applications in ServiceNow, including baseline applications like Incident, appear in the Application Picker",
      "zh": "ServiceNow 中的所有应用程序（包括事件等基线应用程序）都显示在应用程序选择器中"
     },
     {
      "k": "C",
      "t": "Only custom applications appear in the Application Picker",
      "zh": "仅自定义应用程序出现在应用程序选择器中"
     },
     {
      "k": "D",
      "t": "Only downloaded applications appear in the Application Picker",
      "zh": "仅下载的应用程序出现在应用程序选择器中"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://docs.servicenow.com/bundle/paris-application-development/page/build/applications/task/t_SelectAnAppFromTheAppPicker.html"
    ],
    "qZh": "以下哪一项对于应用程序选择器是正确的？"
   },
   {
    "id": "p67",
    "q": "When creating an application through the Guided Application Creator, which of the following is a user experience option?",
    "options": [
     {
      "k": "A",
      "t": "Portal",
      "zh": "门户"
     },
     {
      "k": "B",
      "t": "Mobile",
      "zh": "移动端"
     },
     {
      "k": "C",
      "t": "Self-service",
      "zh": "自助服务"
     },
     {
      "k": "D",
      "t": "Workspace",
      "zh": "工作空间"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://docs.servicenow.com/bundle/quebec-application-development/page/build/guided-app-creator/concept/guided-app-creator.html"
    ],
    "qZh": "通过引导式应用程序创建器创建应用程序时，以下哪一项是用户体验选项？"
   },
   {
    "id": "p68",
    "q": "When writing a Client Script to provide feedback targeted at a specific field, which method should be used?",
    "options": [
     {
      "k": "A",
      "t": "g_form.showInfoMessage()",
      "zh": "g_form.showInfoMessage()"
     },
     {
      "k": "B",
      "t": "g_form.showFieldMsg()",
      "zh": "g_form.showFieldMsg()"
     },
     {
      "k": "C",
      "t": "g_form.addInfoMessage()",
      "zh": "g_form.addInfoMessage()"
     },
     {
      "k": "D",
      "t": "g_form.addFieldMsg()",
      "zh": "g_form.addFieldMsg()"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://docs.servicenow.com/bundle/paris-application-development/page/script/client-scripts/concept/client-script-best-practices.html"
    ],
    "qZh": "在编写针对特定领域的客户端脚本提供反馈时，应该使用哪种方法？"
   },
   {
    "id": "p69",
    "q": "Which actions can a Business Rule take without scripting?",
    "options": [
     {
      "k": "A",
      "t": "Set field values and write to the system log",
      "zh": "设置字段值并写入系统日志"
     },
     {
      "k": "B",
      "t": "Set field values and generate an event",
      "zh": "设置字段值并生成事件"
     },
     {
      "k": "C",
      "t": "Set field values and add message",
      "zh": "设置字段值并添加消息"
     },
     {
      "k": "D",
      "t": "Set field values and query the database",
      "zh": "设置字段值并查询数据库"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://developer.servicenow.com/dev.do#!/learn/learning-plans/orlando/new_to_servicenow/"
    ],
    "qZh": "业务规则可以在不编写脚本的情况下执行哪些操作？"
   },
   {
    "id": "p70",
    "q": "Which server-side object provides methods for working with dates when writing a script in a privately scoped application?",
    "options": [
     {
      "k": "A",
      "t": "GlideDateTime",
      "zh": "GlideDateTime"
     },
     {
      "k": "B",
      "t": "GlideRecord",
      "zh": "GlideRecord"
     },
     {
      "k": "C",
      "t": "GlideSystem",
      "zh": "GlideSystem"
     },
     {
      "k": "D",
      "t": "current",
      "zh": "当前记录（current）"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://developer.servicenow.com/dev.do#!/reference/api/paris/server_legacy/c_GlideSystemAPI#r_GS-nowNoTZ"
    ],
    "qZh": "哪个服务器端对象提供在私有范围的应用程序中编写脚本时处理日期的方法？"
   },
   {
    "id": "p71",
    "q": "Application developers can specify which ServiceNow page a user sees after submitting a new record using the Record Producer UI. How is the page specified?",
    "options": [
     {
      "k": "A",
      "t": "Create an application property to store the URL",
      "zh": "创建应用程序属性来存储URL"
     },
     {
      "k": "B",
      "t": "Configure the page in the Module that opens the Record Producer UI",
      "zh": "配置模块中打开 Record Producer UI 的页面"
     },
     {
      "k": "C",
      "t": "Write an after Business Rule script for the Record Producer's table: window.redirect = \"<URL>\";",
      "zh": "为记录制作者表编写后续业务规则脚本：window.redirect = \"<URL>\";"
     },
     {
      "k": "D",
      "t": "Write a script in the Record Producer's Script field: producer.redirect = \"<URL>\";",
      "zh": "在记录制作者的脚本字段中编写脚本： Producer.redirect = \"<URL>\";"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://docs.servicenow.com/bundle/orlando-it-service-management/page/product/service-catalog-management/concept/c_PopulatingRecordData.html"
    ],
    "qZh": "应用程序开发人员可以指定用户使用记录生成器 UI 提交新记录后看到的 ServiceNow 页面。页面是如何指定的？"
   },
   {
    "id": "p72",
    "q": "Identify characteristic(s) of a Record Producer. (Choose three.)",
    "options": [
     {
      "k": "A",
      "t": "All records created using this strategy are inserted into the Requested Item [sc_req_item] table.",
      "zh": "使用此策略创建的所有记录都将插入到请求的项目 [sc_req_item] 表中。"
     },
     {
      "k": "B",
      "t": "Each field prompts the user with a question rather than a field label.",
      "zh": "Each 字段用问题而不是字段标签提示用户。"
     },
     {
      "k": "C",
      "t": "They must be scripted.",
      "zh": "它们必须编写脚本。"
     },
     {
      "k": "D",
      "t": "You can script behaviors of fields in the user interface.",
      "zh": "您可以编写用户界面中字段行为的脚本。"
     },
     {
      "k": "E",
      "t": "Graphics can be included on the user interface.",
      "zh": "Graphics 可以包含在用户界面上。"
     }
    ],
    "answer": [
     "B",
     "C",
     "D"
    ],
    "multi": true,
    "notes": "",
    "ref": [],
    "qZh": "识别记录制作者的特征。 （选择三项。）"
   },
   {
    "id": "p73",
    "q": "Which server-side API debug log method is available for scoped applications?",
    "options": [
     {
      "k": "A",
      "t": "gs.log()",
      "zh": "gs.log()"
     },
     {
      "k": "B",
      "t": "gs.info()",
      "zh": "gs.info()"
     },
     {
      "k": "C",
      "t": "gs.debuglog()",
      "zh": "gs.debuglog()"
     },
     {
      "k": "D",
      "t": "gs.print()",
      "zh": "gs.print()"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://developer.servicenow.com/dev.do#!/learn/courses/paris/app_store_learnv2_scripting_paris_scripting_in_servicenow/"
    ],
    "qZh": "哪种服务器端API调试日志方法可用于范围内的应用程序？"
   },
   {
    "id": "p74",
    "q": "Which script types execute on the server? (Choose three.)",
    "options": [
     {
      "k": "A",
      "t": "Business Rule",
      "zh": "业务规则"
     },
     {
      "k": "B",
      "t": "Client Scripts",
      "zh": "Client 脚本"
     },
     {
      "k": "C",
      "t": "UI Policies",
      "zh": "UI政策"
     },
     {
      "k": "D",
      "t": "Script Actions",
      "zh": "脚本动作"
     },
     {
      "k": "E",
      "t": "Scheduled Jobs",
      "zh": "预定作业"
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
    ],
    "qZh": "哪些脚本类型在服务器上执行？ （选择三项。）"
   },
   {
    "id": "p75",
    "q": "What is the best UX format to use for lists and forms?",
    "options": [
     {
      "k": "A",
      "t": "Forms",
      "zh": "表单"
     },
     {
      "k": "B",
      "t": "Lists",
      "zh": "列表"
     },
     {
      "k": "C",
      "t": "Standard",
      "zh": "标准"
     },
     {
      "k": "D",
      "t": "Classic",
      "zh": "经典界面"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://docs.servicenow.com/bundle/quebec-platform-user-interface/page/use/using-lists/concept/c_UseLists.html"
    ],
    "qZh": "用于列表和表单的最佳 UX 格式是什么？"
   },
   {
    "id": "p76",
    "q": "When creating a table in a privately-scoped application, which four Access Controls are created for the table?",
    "options": [
     {
      "k": "A",
      "t": "Insert, Delete, Query, Write",
      "zh": "插入、删除、查询、写入"
     },
     {
      "k": "B",
      "t": "Create, Delete, Read, Write",
      "zh": "创建、删除、读取、写入"
     },
     {
      "k": "C",
      "t": "Create, Delete, Read, Update",
      "zh": "创建、删除、读取、更新"
     },
     {
      "k": "D",
      "t": "Insert, Delete, Query, Update",
      "zh": "插入、删除、查询、更新"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://docs.servicenow.com/bundle/quebec-application-development/page/script/business-rules/concept/c_BusinessRulesInScopedApps.html"
    ],
    "qZh": "在私有范围的应用程序中创建表时，为该表创建哪四个访问控制？"
   },
   {
    "id": "p77",
    "q": "Which one of the following is true for this script fragment? g_user.hasRole('x_my_app_user');",
    "options": [
     {
      "k": "A",
      "t": "There is no g_user.hasRole() method",
      "zh": "没有g_user.hasRole()方法"
     },
     {
      "k": "B",
      "t": "The method returns false only if the currently logged in user has the x_my_app_user role",
      "zh": "仅当当前登录用户具有 x_my_app_user 角色时该方法返回 false"
     },
     {
      "k": "C",
      "t": "The method returns true only if the currently logged in user has the x_my_app_user role",
      "zh": "仅当当前登录用户具有x_my_app_user角色时该方法返回true"
     },
     {
      "k": "D",
      "t": "The method returns true if the currently logged in user has the x_my_app_user role or the admin role",
      "zh": "如果当前登录的用户具有x_my_app_user角色或admin角色，该方法返回true"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://developer.servicenow.com/dev.do#!/learn/learning-plans/orlando/new_to_servicenow/"
    ],
    "qZh": "对于此脚本片段，以下哪一项是正确的？ g_user.hasRole('x_my_app_user');"
   },
   {
    "id": "p78",
    "q": "Which one of the following database operations cannot be controlled with Application Access?",
    "options": [
     {
      "k": "A",
      "t": "Query",
      "zh": "查询"
     },
     {
      "k": "B",
      "t": "Update",
      "zh": "更新"
     },
     {
      "k": "C",
      "t": "Create",
      "zh": "创建"
     },
     {
      "k": "D",
      "t": "Delete",
      "zh": "删除"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://developer.servicenow.com/dev.do#!/learn/learning-plans/orlando/new_to_servicenow/"
    ],
    "qZh": "以下哪一项数据库操作无法通过应用程序访问进行控制？"
   },
   {
    "id": "p79",
    "q": "For Application Access there is a configuration option called Allow access to this table via web services. Which one of the following statements is true when this option is selected?",
    "options": [
     {
      "k": "A",
      "t": "This option restricts the ability to delete records via web services but records can always be read",
      "zh": "此选项限制通过 Web 服务删除记录的能力，但记录始终可以读取"
     },
     {
      "k": "B",
      "t": "Even when not selected, users with the correct permissions can use web services to access the table's records",
      "zh": "即使未选中，具有正确权限的用户也可以使用 Web 服务访问表的记录"
     },
     {
      "k": "C",
      "t": "This option restricts access only to SOAP web services but does not apply to REST",
      "zh": "此选项仅限制对 SOAP Web 服务的访问，但不适用于 REST"
     },
     {
      "k": "D",
      "t": "The user performing the query via web services must have the correct permissions to access the table's records",
      "zh": "通过Web服务执行查询的用户必须具有访问表记录的正确权限"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "对于应用程序访问，有一个名为“允许通过 Web 服务访问此表”的配置选项。选择此选项时，以下哪一项陈述是正确的？"
   },
   {
    "id": "p80",
    "q": "Which of the following statements must evaluate to true for a user to pass an Access Control? (Choose three.)",
    "options": [
     {
      "k": "A",
      "t": "The user has one of the roles specified in the Required roles related list.",
      "zh": "用户具有“所需角色”相关列表中指定的角色之一。\n访问控制中配置的"
     },
     {
      "k": "B",
      "t": "Scripts configured in the Access Control must evaluate to true.",
      "zh": "Scripts 必须评估为 true。"
     },
     {
      "k": "C",
      "t": "Other matching Access Controls for the records evaluate to true.",
      "zh": "记录的其他匹配访问控制评估为 true。"
     },
     {
      "k": "D",
      "t": "Conditions configured in the Access Control must evaluate to true.",
      "zh": "访问控制中配置的条件必须评估为 true。"
     },
     {
      "k": "E",
      "t": "The user must be granted access through a business rule.",
      "zh": "必须通过业务规则授予用户访问权限。"
     }
    ],
    "answer": [
     "B",
     "D",
     "E"
    ],
    "multi": true,
    "notes": "",
    "ref": [],
    "qZh": "以下哪条语句必须评估为 true 才能让用户通过访问控制？ （选择三项。）"
   },
   {
    "id": "p81",
    "q": "What is a workflow context?",
    "options": [
     {
      "k": "A",
      "t": "The table for which a workflow is defined plus any conditions such as \"Active is true\"",
      "zh": "定义工作流程的表以及任何条件（例如“Active is true”）"
     },
     {
      "k": "B",
      "t": "It is generated from a workflow version, executes activities, and follows transitions",
      "zh": "它是从工作流程版本生成的，执行活动并遵循转换"
     },
     {
      "k": "C",
      "t": "The business reason or process for which a workflow is designed",
      "zh": "设计工作流的业务原因或流程"
     },
     {
      "k": "D",
      "t": "It is a checked out workflow which is being edited",
      "zh": "这是一个已签出的工作流程，正在编辑中"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0538528"
    ],
    "qZh": "什么是工作流上下文？"
   },
   {
    "id": "p82",
    "q": "Which one of the following is a benefit of creating an Application Properties page for each application you develop?",
    "options": [
     {
      "k": "A",
      "t": "Application Properties allow a developer to override the application properties inherited from ServiceNow",
      "zh": "Application 属性允许开发人员覆盖从 ServiceNow 继承的应用程序属性"
     },
     {
      "k": "B",
      "t": "An Application Properties page is a good landing page for an application",
      "zh": "应用程序属性页面是应用程序的良好登陆页面"
     },
     {
      "k": "C",
      "t": "Application Properties allow a developer or admin to make changes to an application's behavior without modifying application artifacts",
      "zh": "Application 属性允许开发人员或管理员更改应用程序的行为，而无需修改应用程序工件"
     },
     {
      "k": "D",
      "t": "Application users know to go to the Application Properties page to change the appearance of an application",
      "zh": "Application 用户知道要转到“应用程序属性”页面来更改应用程序的外观"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "为您开发的每个应用程序创建应用程序属性页有以下哪一项好处？"
   },
   {
    "id": "p83",
    "q": "Which one of the following is NOT an example of when an application might use a Scheduled Script Execution (Scheduled Job)?",
    "options": [
     {
      "k": "A",
      "t": "The application needs to send weekly email reminders to requestors for all records on a table",
      "zh": "应用程序需要每周向请求者发送表上所有记录的电子邮件提醒"
     },
     {
      "k": "B",
      "t": "The application needs to run a clean up script on the last day of every month",
      "zh": "应用程序需要在每个月的最后一天运行清理脚本"
     },
     {
      "k": "C",
      "t": "The application needs to query the database every day to look for unassigned records",
      "zh": "应用程序需要每天查询数据库以查找未分配的记录"
     },
     {
      "k": "D",
      "t": "The application needs to run a client-side script at the same time every day",
      "zh": "应用程序需要每天在同一时间运行客户端脚本"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "以下哪一项不是应用程序何时可能使用计划脚本执行（计划作业）的示例？"
   },
   {
    "id": "p84",
    "q": "Which one of the following objects CANNOT be used in a Script Action script?",
    "options": [
     {
      "k": "A",
      "t": "previous",
      "zh": "上一个"
     },
     {
      "k": "B",
      "t": "GlideRecord",
      "zh": "GlideRecord"
     },
     {
      "k": "C",
      "t": "event",
      "zh": "事件对象（event）"
     },
     {
      "k": "D",
      "t": "current",
      "zh": "当前记录（current）"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://docs.servicenow.com/bundle/paris-platform-administration/page/administer/platform-events/reference/r_ScriptActions.html"
    ],
    "qZh": "以下哪一个对象不能在脚本操作脚本中使用？"
   },
   {
    "id": "p85",
    "q": "How does ServiceNow match inbound email to existing records?",
    "options": [
     {
      "k": "A",
      "t": "Watermark",
      "zh": "水印"
     },
     {
      "k": "B",
      "t": "Record link",
      "zh": "记录链接"
     },
     {
      "k": "C",
      "t": "Subject line",
      "zh": "主题行"
     },
     {
      "k": "D",
      "t": "sys_id",
      "zh": "sys_id"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://developer.servicenow.com/dev.do#!/learn/courses/quebec/app_store_learnv2_flowdesigner_quebec_flow_designer/"
    ],
    "qZh": "ServiceNow 如何将入站电子邮件与现有记录进行匹配？"
   },
   {
    "id": "p86",
    "q": "When debugging Email Notifications, what must you check on a user record? (Choose three.)",
    "options": [
     {
      "k": "A",
      "t": "Active must be true.",
      "zh": "Active 必须为 true。"
     },
     {
      "k": "B",
      "t": "The First name and Last name fields must have values.",
      "zh": "名字和姓氏字段必须有值。"
     },
     {
      "k": "C",
      "t": "The value in the Notification field must be set to enabled.",
      "zh": "通知字段中的值必须设置为启用。"
     },
     {
      "k": "D",
      "t": "The user must not be locked out.",
      "zh": "用户不得被锁定。"
     },
     {
      "k": "E",
      "t": "The Email field must have a value.",
      "zh": "电子邮件字段必须有一个值。"
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
    ],
    "qZh": "调试电子邮件通知时，必须检查用户记录的哪些内容？ （选择三项。）"
   },
   {
    "id": "p87",
    "q": "What are web services?",
    "options": [
     {
      "k": "A",
      "t": "Methods used to create and maintain UI Pages",
      "zh": "用于创建和维护UI页面的方法"
     },
     {
      "k": "B",
      "t": "Methods used to allow applications to connect to other software applications over a network",
      "zh": "用于允许应用程序通过网络连接到其他软件应用程序的方法"
     },
     {
      "k": "C",
      "t": "Methods used to discover a wide variety of systems and applications",
      "zh": "用于发现各种系统和应用程序的方法"
     },
     {
      "k": "D",
      "t": "They provide a customer-facing view of available service and product offerings provided by departments within the organization",
      "zh": "他们提供面向客户的组织内各部门提供的可用服务和产品的视图"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://docs.servicenow.com/bundle/quebec-application-development/page/integrate/web-services/reference/r_AvailableWebServices.html"
    ],
    "qZh": "什么是 Web 服务？"
   },
   {
    "id": "p88",
    "q": "Which of the following methods is NOT part of the ServiceNow REST API?",
    "options": [
     {
      "k": "A",
      "t": "COPY",
      "zh": "复制（COPY）"
     },
     {
      "k": "B",
      "t": "GET",
      "zh": "获取（GET）"
     },
     {
      "k": "C",
      "t": "DELETE",
      "zh": "删除（DELETE）"
     },
     {
      "k": "D",
      "t": "POST",
      "zh": "提交（POST）"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://developer.servicenow.com/dev.do#!/reference/api/orlando/rest/c_TableAPI"
    ],
    "qZh": "以下哪种方法不是 ServiceNow REST API 的一部分？"
   },
   {
    "id": "p89",
    "q": "You are developing the MyApp application that has a table, Table A. When the MyApp application is installed on an instance, you want Table A's records to be installed as part of the application. Table A's records will be installed when:",
    "options": [
     {
      "k": "A",
      "t": "Table A is active and extends the Task table",
      "zh": "Table A 处于活动状态并扩展任务表"
     },
     {
      "k": "B",
      "t": "Table A's records are added to the application record using the Create Application Files context menu item",
      "zh": "Table A 的记录使用“创建应用程序文件”上下文菜单项添加到应用程序记录中"
     },
     {
      "k": "C",
      "t": "Table A has an automatic number counter for new records",
      "zh": "Table A 有一个新记录的自动计数器"
     },
     {
      "k": "D",
      "t": "Table A is not included in the System Clone > Exclude Tables list",
      "zh": "Table A 未包含在系统克隆 > 排除表列表中"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "您正在开发具有表（表 A）的 MyApp 应用程序。当 MyApp 应用程序安装在实例上时，您希望将表 A 的记录作为应用程序的一部分安装。表 A 的记录将在以下情况下安装："
   },
   {
    "id": "p90",
    "q": "How can an application link to a repository behind a firewall?",
    "options": [
     {
      "k": "A",
      "t": "This option is not supported.",
      "zh": "不支持此选项。"
     },
     {
      "k": "B",
      "t": "Link an application to source control through a MID Server.",
      "zh": "通过 MID 服务器将应用程序链接到源代码控制。"
     },
     {
      "k": "C",
      "t": "Link an application to source control through an access token.",
      "zh": "通过访问令牌将应用程序链接到源代码控制。"
     },
     {
      "k": "D",
      "t": "Link an application to source control with multi-factor authentication.",
      "zh": "通过多重身份验证将应用程序链接到源代码控制。"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [
     "https://docs.servicenow.com/bundle/quebec-application-development/page/build/applications/concept/c_SourceControlIntegration.html"
    ],
    "qZh": "应用程序如何链接到防火墙后面的存储库？"
   },
   {
    "id": "p91",
    "q": "Topic 1 What is the ServiceNow store?",
    "options": [
     {
      "k": "A",
      "t": "Downloadable content ServiceNow script archive",
      "zh": "可下载内容 ServiceNow 脚本存档"
     },
     {
      "k": "B",
      "t": "Alternate name for the ServiceNow Developer Share site",
      "zh": "ServiceNow 开发人员共享站点的备用名称"
     },
     {
      "k": "C",
      "t": "The source for ServiceNow Community created developer content",
      "zh": "ServiceNow 社区创建的开发人员内容的来源"
     },
     {
      "k": "D",
      "t": "Marketplace for free and paid certified ServiceNow applications and integrations",
      "zh": "Marketplace 提供免费和付费认证的 ServiceNow 应用程序和集成"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "Topic 1 ServiceNow 商店是什么？"
   },
   {
    "id": "p92",
    "q": "Tables that extend a table do what?",
    "options": [
     {
      "k": "A",
      "t": "Automatically update the application scope",
      "zh": "自动更新应用范围"
     },
     {
      "k": "B",
      "t": "Do not inherit the parent's fields",
      "zh": "不继承父级的字段"
     },
     {
      "k": "C",
      "t": "Sometimes inherit the parent's fields",
      "zh": "有时继承父级的字段"
     },
     {
      "k": "D",
      "t": "Inherit the parent's fields",
      "zh": "继承父级的字段"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "Tables 扩展表的作用是什么？"
   },
   {
    "id": "p93",
    "q": "When creating an application through the Guided Application Creator, which of the following is NOT an option for creating a table?",
    "options": [
     {
      "k": "A",
      "t": "Create table from template",
      "zh": "从模板创建表"
     },
     {
      "k": "B",
      "t": "Create table from scratch",
      "zh": "从头开始创建表"
     },
     {
      "k": "C",
      "t": "Extend a table",
      "zh": "扩展表"
     },
     {
      "k": "D",
      "t": "Upload spreadsheet",
      "zh": "上传电子表格"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "通过引导式应用程序创建器创建应用程序时，以下哪一项不是用于创建表的选项？"
   },
   {
    "id": "p94",
    "q": "Server-side scripts manage what?",
    "options": [
     {
      "k": "A",
      "t": "Database and backend",
      "zh": "数据库和后端"
     },
     {
      "k": "B",
      "t": "Playbook access",
      "zh": "Playbook访问"
     },
     {
      "k": "C",
      "t": "User access",
      "zh": "用户访问"
     },
     {
      "k": "D",
      "t": "Forms and Fields",
      "zh": "表单和字段"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "服务器端脚本管理什么？"
   },
   {
    "id": "p95",
    "q": "Topic 1 What intuitive development interface guides users through the initial application development process?",
    "options": [
     {
      "k": "A",
      "t": "Guided Tour Designer",
      "zh": "导游设计师"
     },
     {
      "k": "B",
      "t": "Guided Application Creator",
      "zh": "Guided 应用程序创建器"
     },
     {
      "k": "C",
      "t": "ServiceNow Studio",
      "zh": "ServiceNow工作室"
     },
     {
      "k": "D",
      "t": "Flow Designer",
      "zh": "Flow设计器"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "Topic 1 哪种直观的开发界面可以引导用户完成初始应用程序开发过程？"
   },
   {
    "id": "p96",
    "q": "What are some benefits of developing private, scoped applications? (Choose two.)",
    "options": [
     {
      "k": "A",
      "t": "To avoid using a code repository like GitHub or GitLab",
      "zh": "避免使用 GitHub 或 GitLab 等代码存储库"
     },
     {
      "k": "B",
      "t": "To reduce risk at code collisions",
      "zh": "降低代码冲突的风险"
     },
     {
      "k": "C",
      "t": "To enable installation and uninstallation of an application",
      "zh": "启用应用程序的安装和卸载"
     },
     {
      "k": "D",
      "t": "To replicate ServiceNow functions a private scope",
      "zh": "将 ServiceNow 函数复制到私有范围"
     }
    ],
    "answer": [
     "B",
     "C"
    ],
    "multi": true,
    "notes": "",
    "ref": [],
    "qZh": "开发私有范围应用程序有哪些好处？ （选择两个。）"
   },
   {
    "id": "p97",
    "q": "Which of the following statements is NOT true for the Form Designer?",
    "options": [
     {
      "k": "A",
      "t": "To add a section to the form layout, drag it from the Field Types tab to the desired destination on the form.",
      "zh": "要向表单布局添加一个部分，请将其从“字段类型”选项卡拖动到表单上的所需目标位置。"
     },
     {
      "k": "B",
      "t": "To add a field to the form layout, drag the field from the Fields tab to the desired destination on the form.",
      "zh": "要将字段添加到表单布局，请将字段从“字段”选项卡拖到表单上的所需目标位置。"
     },
     {
      "k": "C",
      "t": "To remove a field from the form layout, hover over the field to enable the Action buttons, and select the Delete (X) button.",
      "zh": "要从表单布局中删除字段，请将鼠标悬停在该字段上以启用操作按钮，然后选择删除 (X) 按钮。"
     },
     {
      "k": "D",
      "t": "To create a new field on a form's table, drag the appropriate data type from the Field Types tab to the form and then configure the new field.",
      "zh": "要在表单的表格上创建新字段，请将适当的数据类型从“字段类型”选项卡拖动到表单，然后配置新字段。"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "对于表单设计器，以下哪项陈述不正确？"
   },
   {
    "id": "p98",
    "q": "What records are used to track cross-scope applications or scripts that request access to an application, application resource, or event?",
    "options": [
     {
      "k": "A",
      "t": "Restricted caller access records",
      "zh": "限制呼叫者访问记录"
     },
     {
      "k": "B",
      "t": "Caller tracking records",
      "zh": "Caller追踪记录"
     },
     {
      "k": "C",
      "t": "Access control level records",
      "zh": "访问控制级别记录"
     },
     {
      "k": "D",
      "t": "Cross-scope access records",
      "zh": "跨范围访问记录"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "哪些记录用于跟踪请求访问应用程序、应用程序资源或事件的跨范围应用程序或脚本？"
   },
   {
    "id": "p99",
    "q": "Which ATF Test step allows you to create a user with speeded roles and groups for the test?",
    "options": [
     {
      "k": "A",
      "t": "Create a group",
      "zh": "创建群组"
     },
     {
      "k": "B",
      "t": "Impersonation",
      "zh": "模拟"
     },
     {
      "k": "C",
      "t": "Create a user",
      "zh": "创建用户"
     },
     {
      "k": "D",
      "t": "Create a role",
      "zh": "创建角色"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "哪个 ATF 测试步骤允许您创建具有加速角色和组的用户以进行测试？"
   },
   {
    "id": "p100",
    "q": "What plugin enables the Guided Application Creator?",
    "options": [
     {
      "k": "A",
      "t": "com.glide.sn-guided-app-creator",
      "zh": "com.glide.sn-guided-app-creator"
     },
     {
      "k": "B",
      "t": "com.glide.service_creator",
      "zh": "com.glide.service_creator"
     },
     {
      "k": "C",
      "t": "com.glide.snc.apps_creator",
      "zh": "com.glide.snc.apps_creator"
     },
     {
      "k": "D",
      "t": "com.snc.apps_creator_template",
      "zh": "com.snc.apps_creator_template"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "什么插件可以启用引导式应用程序创建器？"
   },
   {
    "id": "p101",
    "q": "Which of the following can be an external data source for a ServiceNow application?",
    "options": [
     {
      "k": "A",
      "t": "Microsoft Excel File",
      "zh": "Microsoft Excel 文件"
     },
     {
      "k": "B",
      "t": "Data provided by a public web service using SOAP or REST",
      "zh": "Data 由使用 SOAP 或 REST 的公共 Web 服务提供"
     },
     {
      "k": "C",
      "t": "CSV file",
      "zh": "CSV 文件"
     },
     {
      "k": "D",
      "t": "All of the above",
      "zh": "以上全部"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "以下哪一项可以作为 ServiceNow 应用程序的外部数据源？"
   },
   {
    "id": "p102",
    "q": "Which one of the following is true for the Application Picker and Application Scope?",
    "options": [
     {
      "k": "A",
      "t": "Global is a reserved application which does not appear in the Application Picker",
      "zh": "Global 是保留的应用程序，不会出现在应用程序选取器中"
     },
     {
      "k": "B",
      "t": "Selecting an application from the Application Picker does not set the Application Scope",
      "zh": "从应用程序选择器中选择应用程序不会设置应用程序范围"
     },
     {
      "k": "C",
      "t": "Selecting an application from the Application Picker sets the Application Scope",
      "zh": "从应用程序选择器中选择应用程序设置应用程序范围"
     },
     {
      "k": "D",
      "t": "Selecting Global in the Application Picker sets the Application Scope to Incident",
      "zh": "在应用程序选择器中选择全局将应用程序范围设置为事件"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "以下哪一项对于应用程序选择器和应用程序范围是正确的？"
   },
   {
    "id": "p103",
    "q": "Which of the following is an available feature in Studio? (Choose two.)",
    "options": [
     {
      "k": "A",
      "t": "Push to update set",
      "zh": "推送更新集"
     },
     {
      "k": "B",
      "t": "Merge branches",
      "zh": "合并分支"
     },
     {
      "k": "C",
      "t": "Search code",
      "zh": "搜索码"
     },
     {
      "k": "D",
      "t": "Push to external source control",
      "zh": "推送到外部源代码控制"
     }
    ],
    "answer": [
     "B",
     "C"
    ],
    "multi": true,
    "notes": "",
    "ref": [],
    "qZh": "Studio 中提供以下哪项功能？ （选择两个。）"
   },
   {
    "id": "p104",
    "q": "The Task table is an example of which of the following? (Choose two.)",
    "options": [
     {
      "k": "A",
      "t": "Parent class",
      "zh": "父类"
     },
     {
      "k": "B",
      "t": "Legacy class",
      "zh": "Legacy 类"
     },
     {
      "k": "C",
      "t": "Child class",
      "zh": "Child类"
     },
     {
      "k": "D",
      "t": "Base class",
      "zh": "基类"
     }
    ],
    "answer": [
     "C",
     "D"
    ],
    "multi": true,
    "notes": "",
    "ref": [],
    "qZh": "任务表是以下哪一项的示例？ （选择两个。）"
   },
   {
    "id": "p105",
    "q": "Topic 1 Which of the following is true about deleting fields from a table?",
    "options": [
     {
      "k": "A",
      "t": "Table records are deleted when a field is deleted",
      "zh": "表记录在删除字段时也被删除"
     },
     {
      "k": "B",
      "t": "User-defined non-inherited fields can be deleted",
      "zh": "用户定义的非继承字段可以删除"
     },
     {
      "k": "C",
      "t": "Any field on a table can be deleted",
      "zh": "表上的任何字段都可以删除"
     },
     {
      "k": "D",
      "t": "Inherited fields can be deleted",
      "zh": "继承字段可以删除"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "Topic 1 关于从表中删除字段，以下哪一项是正确的？"
   },
   {
    "id": "p106",
    "q": "Why would you build a custom app? (Choose two.)",
    "options": [
     {
      "k": "A",
      "t": "To avoid using a code repository like GitHub or GitLab",
      "zh": "避免使用 GitHub 或 GitLab 等代码存储库"
     },
     {
      "k": "B",
      "t": "To replace ServiceNow base tables",
      "zh": "替换ServiceNow基表"
     },
     {
      "k": "C",
      "t": "To fulfill a specific use case on internal processes",
      "zh": "实现内部流程的特定用例"
     },
     {
      "k": "D",
      "t": "To create a custom integration for a 3rd party system",
      "zh": "为第3方系统创建自定义集成"
     }
    ],
    "answer": [
     "C",
     "D"
    ],
    "multi": true,
    "notes": "",
    "ref": [],
    "qZh": "为什么要构建自定义应用程序？ （选择两个。）"
   },
   {
    "id": "p107",
    "q": "What are three ServiceNow table creation methods? (Choose three.)",
    "options": [
     {
      "k": "A",
      "t": "Using legacy Workflows",
      "zh": "使用旧版工作流程"
     },
     {
      "k": "B",
      "t": "Upload and turn a spreadsheet into a custom table",
      "zh": "上传电子表格并将其转换为自定义表格"
     },
     {
      "k": "C",
      "t": "Using Flow Designer",
      "zh": "使用流程设计器"
     },
     {
      "k": "D",
      "t": "Use the Now Experience Table Creator",
      "zh": "使用 Now Experience Table Creator"
     },
     {
      "k": "E",
      "t": "Extend a table",
      "zh": "扩展表"
     },
     {
      "k": "F",
      "t": "Create a custom table",
      "zh": "创建自定义表格"
     }
    ],
    "answer": [
     "B",
     "D",
     "E"
    ],
    "multi": true,
    "notes": "",
    "ref": [],
    "qZh": "ServiceNow建表方式有哪三种？ （选择三项。）"
   },
   {
    "id": "p108",
    "q": "When selecting a data type for a field that will be displayed on a form, which of the following statements is NOT correct?",
    "options": [
     {
      "k": "A",
      "t": "Use the String data type tor a free-form text field",
      "zh": "在自由格式文本字段中使用字符串数据类型"
     },
     {
      "k": "B",
      "t": "Use the Phone Number data type to automate phone number data validation",
      "zh": "使用电话号码数据类型自动进行电话号码数据验证"
     },
     {
      "k": "C",
      "t": "Use the Choice data type to limit options in a field",
      "zh": "使用 Choice 数据类型来限制字段中的选项"
     },
     {
      "k": "D",
      "t": "Use the Date data type to enter the date and time of day",
      "zh": "使用日期数据类型输入日期和时间"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "为将在表单上显示的字段选择数据类型时，以下哪项陈述不正确？"
   },
   {
    "id": "p109",
    "q": "Which one of the following is NOT part of the Form Designer?",
    "options": [
     {
      "k": "A",
      "t": "Page header",
      "zh": "页头"
     },
     {
      "k": "B",
      "t": "Schema map",
      "zh": "Schema 地图"
     },
     {
      "k": "C",
      "t": "Field navigator",
      "zh": "字段导航器"
     },
     {
      "k": "D",
      "t": "Form layout",
      "zh": "Form布局"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "以下哪一项不是表单设计器的一部分？"
   },
   {
    "id": "p110",
    "q": "Which class is NOT part of the Client side scoped APIs?",
    "options": [
     {
      "k": "A",
      "t": "GlideDialogWindow",
      "zh": "GlideDialogWindow"
     },
     {
      "k": "B",
      "t": "GlideAjax",
      "zh": "GlideAjax"
     },
     {
      "k": "C",
      "t": "GlideRecord",
      "zh": "GlideRecord"
     },
     {
      "k": "D",
      "t": "GlideForm",
      "zh": "GlideForm"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "哪个类不是客户端范围 API 的一部分？"
   },
   {
    "id": "p111",
    "q": "When designing and creating a form what do you create to organize fields on a form?",
    "options": [
     {
      "k": "A",
      "t": "Buttons",
      "zh": "按钮"
     },
     {
      "k": "B",
      "t": "Tabs",
      "zh": "选项卡"
     },
     {
      "k": "C",
      "t": "Sections",
      "zh": "分区"
     },
     {
      "k": "D",
      "t": "Related lists",
      "zh": "相关列表"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "设计和创建表单时，您创建什么来组织表单上的字段？"
   },
   {
    "id": "p112",
    "q": "Which one of the following is a good practice for adding instructions to a form?",
    "options": [
     {
      "k": "A",
      "t": "Related links to wiki pages",
      "zh": "维基页面的相关链接"
     },
     {
      "k": "B",
      "t": "A Context Menu UI Action",
      "zh": "A 上下文菜单 UI 操作"
     },
     {
      "k": "C",
      "t": "Annotations",
      "zh": "注释"
     },
     {
      "k": "D",
      "t": "A populated read-only field",
      "zh": "A 填充只读字段"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "以下哪一项是将指令添加到表单的良好做法？"
   },
   {
    "id": "p113",
    "q": "Which of the following GlideRecord methods run a query against a database table? (Choose three.)",
    "options": [
     {
      "k": "A",
      "t": "_get()",
      "zh": "_get()"
     },
     {
      "k": "B",
      "t": "runQuery()",
      "zh": "runQuery()"
     },
     {
      "k": "C",
      "t": "query()",
      "zh": "query()"
     },
     {
      "k": "D",
      "t": "_query()",
      "zh": "_query()"
     },
     {
      "k": "E",
      "t": "get(",
      "zh": "get("
     }
    ],
    "answer": [
     "C",
     "D",
     "E"
    ],
    "multi": true,
    "notes": "",
    "ref": [],
    "qZh": "以下哪些 GlideRecord 方法对数据库表运行查询？ （选择三项。）"
   },
   {
    "id": "p114",
    "q": "What is the GlideForm Client-side scripting object?",
    "options": [
     {
      "k": "A",
      "t": "sn.form",
      "zh": "sn.form"
     },
     {
      "k": "B",
      "t": "g_form",
      "zh": "g_form"
     },
     {
      "k": "C",
      "t": "gs.form",
      "zh": "gs.form"
     },
     {
      "k": "D",
      "t": "gs_form",
      "zh": "gs_form"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "什么是 GlideForm 客户端脚本对象？"
   },
   {
    "id": "p115",
    "q": "In a Business Rule, which one of the following returns the sys_id of the currently logged in user?",
    "options": [
     {
      "k": "A",
      "t": "g_form.getUserID()",
      "zh": "g_form.getUserID()"
     },
     {
      "k": "B",
      "t": "gs.getUserSysID()",
      "zh": "gs.getUserSysID()"
     },
     {
      "k": "C",
      "t": "gs.getUserID()",
      "zh": "gs.getUserID()"
     },
     {
      "k": "D",
      "t": "g_form.getUserSysID()",
      "zh": "g_form.getUserSysID()"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "在业务规则中，以下哪一项返回当前登录用户的 sys_id？"
   },
   {
    "id": "p116",
    "q": "Access Control debug information identifies whether each element of an Access Control granted or denied access. The elements appear in the debug information in the order of evaluation. In which order are the elements of an Access Control evaluated?",
    "options": [
     {
      "k": "A",
      "t": "Conditions, Roles, Script",
      "zh": "条件、角色、脚本"
     },
     {
      "k": "B",
      "t": "Conditions, Script, Roles",
      "zh": "条件、脚本、角色"
     },
     {
      "k": "C",
      "t": "Roles, Conditions, Script",
      "zh": "角色、条件、脚本"
     },
     {
      "k": "D",
      "t": "Script, Conditions, Roles",
      "zh": "Script、条件、角色"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "访问控制调试信息标识访问控制的每个元素是授予还是拒绝访问。这些元素按评估顺序出现在调试信息中。访问控制的元素按什么顺序评估？"
   },
   {
    "id": "p117",
    "q": "Assume a table called table exists and contains 3 fields: field1, field2, field3. Examine the Access Control list for table: Which field or fields can a user with the itil role read?",
    "options": [
     {
      "k": "A",
      "t": "All fields except field3",
      "zh": "除field3之外的所有字段"
     },
     {
      "k": "B",
      "t": "field1, field2, and field3",
      "zh": "field1、field2 和 field3"
     },
     {
      "k": "C",
      "t": "field1 and field3",
      "zh": "field1 和 field3\n仅限"
     },
     {
      "k": "D",
      "t": "field3 only",
      "zh": "field3"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "假设存在一个名为table的表，并且包含3个字段：field1、field2、field3。检查表的访问控制列表：具有 itil 角色的用户可以读取哪些字段？"
   },
   {
    "id": "p118",
    "q": "Assume a table called table exists and contains 3 fields: field1, field2, field3. Examine the Access Control list for table: Which field or fields can a user with the itil role read?",
    "options": [
     {
      "k": "A",
      "t": "field3 only",
      "zh": "field3"
     },
     {
      "k": "B",
      "t": "filed1 and field3",
      "zh": "filed1 和 field3"
     },
     {
      "k": "C",
      "t": "All fields",
      "zh": "所有字段"
     },
     {
      "k": "D",
      "t": "All fields except field3",
      "zh": "除field3之外的所有字段"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "假设存在一个名为table的表，并且包含3个字段：field1、field2、field3。检查表的访问控制列表：具有 itil 角色的用户可以读取哪些字段？\n仅限"
   },
   {
    "id": "p119",
    "q": "Which of the following is NOT a caller access field option?",
    "options": [
     {
      "k": "A",
      "t": "Caller Tracking",
      "zh": "Caller追踪"
     },
     {
      "k": "B",
      "t": "Caller Restriction",
      "zh": "来电限制"
     },
     {
      "k": "C",
      "t": "None",
      "zh": "无"
     },
     {
      "k": "D",
      "t": "Caller Permission",
      "zh": "Caller权限"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "以下哪一项不是调用者访问字段选项？"
   },
   {
    "id": "p120",
    "q": "Which method is used to retrieve Application Property values in a script?",
    "options": [
     {
      "k": "A",
      "t": "gs.getProperty()",
      "zh": "gs.getProperty()"
     },
     {
      "k": "B",
      "t": "g_form.getAppProperty()",
      "zh": "g_form.getAppProperty()"
     },
     {
      "k": "C",
      "t": "g_form.getProperty()",
      "zh": "g_form.getProperty()"
     },
     {
      "k": "D",
      "t": "gs.getAppProperty()",
      "zh": "gs.getAppProperty()"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "哪种方法用于检索脚本中的应用程序属性值？"
   },
   {
    "id": "p121",
    "q": "What Module Link type is used to access an Application Properties page?",
    "options": [
     {
      "k": "A",
      "t": "Single Record",
      "zh": "单记录"
     },
     {
      "k": "B",
      "t": "HTML (from Arguments)",
      "zh": "HTML（来自参数）"
     },
     {
      "k": "C",
      "t": "URL (from Arguments)",
      "zh": "URL（来自参数）"
     },
     {
      "k": "D",
      "t": "Script (from Arguments)",
      "zh": "Script（来自参数）"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "使用什么模块链接类型来访问应用程序属性页面？"
   },
   {
    "id": "p122",
    "q": "Identify the way(s) an application can respond to an Event generated by the gs.eventQueue() method. a. Script Action b. Scheduled Script Execution (Scheduled Job) c. UI Policy d. Email Notification",
    "options": [
     {
      "k": "A",
      "t": "b and c",
      "zh": "b 和 c"
     },
     {
      "k": "B",
      "t": "c",
      "zh": "c"
     },
     {
      "k": "C",
      "t": "a and d",
      "zh": "a 和 d"
     },
     {
      "k": "D",
      "t": "a and c",
      "zh": "a 和 c"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "确定应用程序响应 gs.eventQueue() 方法生成的事件的方式。一个。脚本动作 B.计划的脚本执行（计划的作业） c． UI 政策 D.电子邮件通知"
   },
   {
    "id": "p123",
    "q": "When troubleshooting and debugging notifications, where do you navigate to see if an email was sent m response to an event?",
    "options": [
     {
      "k": "A",
      "t": "System Logs > Events",
      "zh": "系统日志 > 事件"
     },
     {
      "k": "B",
      "t": "System Logs > Emails",
      "zh": "系统日志 > 电子邮件"
     },
     {
      "k": "C",
      "t": "System Logs > Push Notifications",
      "zh": "系统日志 > 推送通知"
     },
     {
      "k": "D",
      "t": "System Logs > ICE Logs",
      "zh": "系统日志 > ICE 日志"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "在对通知进行故障排除和调试时，您可以在哪里导航以查看是否已发送电子邮件以响应事件？"
   },
   {
    "id": "p124",
    "q": "What are the benefits of storing the majority of an Application's server-side script logic in a Script Include? a. This makes execution faster. b. Only run when called from a script. c. The script logic can be hidden when the Application is installed from the ServiceNow Store. d. For some changes to application logic there is only one place to make edits.",
    "options": [
     {
      "k": "A",
      "t": "a, b, and d",
      "zh": "a、b 和 d"
     },
     {
      "k": "B",
      "t": "a, b, c, and d",
      "zh": "a、b、c 和 d"
     },
     {
      "k": "C",
      "t": "b, c, and d",
      "zh": "b、c 和 d"
     },
     {
      "k": "D",
      "t": "a, b, and c",
      "zh": "a、b 和 c"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "将应用程序的大部分服务器端脚本逻辑存储在脚本包含中有什么好处？一个。这使得执行速度更快。 b.仅在从脚本调用时运行。 c.从 ServiceNow Store 安装应用程序时，可以隐藏脚本逻辑。 d.对于应用程序逻辑的某些更改，只有一处可以进行编辑。"
   },
   {
    "id": "p125",
    "q": "Which of the following is NOT a Flow Designer feature?",
    "options": [
     {
      "k": "A",
      "t": "Run a flow from a Catalog item",
      "zh": "从目录项运行流程"
     },
     {
      "k": "B",
      "t": "Call a flow from another flow or subflow",
      "zh": "从另一个流或子流调用一个流"
     },
     {
      "k": "C",
      "t": "Add stages to a flow",
      "zh": "向流程添加阶段"
     },
     {
      "k": "D",
      "t": "Test a flow using the \"Run as\" feature",
      "zh": "使用“运行方式”功能测试流程"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "以下哪一项不是流程设计器功能？"
   },
   {
    "id": "p126",
    "q": "Topic 1 What is the purpose of the coalesce field when importing data?",
    "options": [
     {
      "k": "A",
      "t": "If a match is not found, the existing record is updated",
      "zh": "如果未找到匹配项，则更新现有记录"
     },
     {
      "k": "B",
      "t": "To determine if a record matches an existing record or is a new record",
      "zh": "判断一条记录是否与现有记录匹配或者是新记录"
     },
     {
      "k": "C",
      "t": "To identify and merge duplicate records",
      "zh": "识别并合并重复记录"
     },
     {
      "k": "D",
      "t": "When a match is found, a new record is inserted",
      "zh": "找到匹配项时，插入新记录"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "Topic 1 导入数据时合并字段的用途是什么？"
   },
   {
    "id": "p127",
    "q": "If you create a SOAP Message what syntax indicates a variable to pass when the function is called?",
    "options": [
     {
      "k": "A",
      "t": "current.variable_name",
      "zh": "current.variable_name"
     },
     {
      "k": "B",
      "t": "${variable_name}",
      "zh": "${变量名}"
     },
     {
      "k": "C",
      "t": "< variable_name >.do?WSDL",
      "zh": "<变量名>.do?WSDL"
     },
     {
      "k": "D",
      "t": "< variable_name >",
      "zh": "<变量名称>"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "如果创建 SOAP 消息，什么语法指示调用函数时要传递的变量？"
   },
   {
    "id": "p128",
    "q": "Which of the following is NOT a way to install an application on a ServiceNow instance?",
    "options": [
     {
      "k": "A",
      "t": "Install an application from the Application Repository",
      "zh": "从应用程序存储库安装应用程序"
     },
     {
      "k": "B",
      "t": "Select the Copy button on the application record",
      "zh": "选择申请记录上的“复制”按钮"
     },
     {
      "k": "C",
      "t": "Download and install an application from the ServiceNow Share web site",
      "zh": "从 ServiceNow Share 网站下载并安装应用程序"
     },
     {
      "k": "D",
      "t": "Download and install a third-party application from the ServiceNow Store",
      "zh": "从 ServiceNow 商店下载并安装第三方应用程序"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "以下哪项不是在 ServiceNow 实例上安装应用程序的方法？"
   },
   {
    "id": "p129",
    "q": "Using Custom UI test step in Automated Test Framework, which of the following is NOT a testable page component?",
    "options": [
     {
      "k": "A",
      "t": "Buttons",
      "zh": "按钮"
     },
     {
      "k": "B",
      "t": "UI controls",
      "zh": "UI控件"
     },
     {
      "k": "C",
      "t": "UI pages",
      "zh": "UI页面"
     },
     {
      "k": "D",
      "t": "Form field values",
      "zh": "Form 字段值"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "在自动化测试框架中使用自定义 UI 测试步骤，以下哪项不是可测试的页面组件？"
   },
   {
    "id": "p130",
    "q": "Why create Applications in ServiceNow?\na) To replace outdated, inadequate, custom business applications and processes\nb) To extend service delivery and management to all enterprise departments\nc) To allow users full access to all ServiceNow tables, records, and fields\nd) To extend the value of ServiceNow",
    "options": [
     {
      "k": "A",
      "t": "a, b, and d",
      "zh": "a、b 和 d"
     },
     {
      "k": "B",
      "t": "a, b, c, and d",
      "zh": "a、b、c 和 d"
     },
     {
      "k": "C",
      "t": "a, b, and c",
      "zh": "a、b 和 c"
     },
     {
      "k": "D",
      "t": "b, c, and d",
      "zh": "b、c 和 d"
     }
    ],
    "answer": [
     "A"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "为什么在ServiceNow中创建应用程序？\na) 替换过时的、不充分的、定制的业务应用程序和流程\nb) 将服务提供和管理延伸至企业各部门\nc) 允许用户完全访问所有 ServiceNow 表、记录和字段\nd) 扩展 ServiceNow 的价值"
   },
   {
    "id": "p131",
    "q": "Flow Designer supports variable data types to store record data and complex data. Which of the following are supported variable data types? (Choose three.)",
    "options": [
     {
      "k": "A",
      "t": "Choice data type",
      "zh": "Choice数据类型"
     },
     {
      "k": "B",
      "t": "Array.Reference data type",
      "zh": "Array.Reference 数据类型"
     },
     {
      "k": "C",
      "t": "Integer data type",
      "zh": "Integer 数据类型"
     },
     {
      "k": "D",
      "t": "Freedom data type",
      "zh": "Freedom 数据类型"
     },
     {
      "k": "E",
      "t": "Array.Boolean data type",
      "zh": "Array.Boolean 数据类型"
     },
     {
      "k": "F",
      "t": "Label data type",
      "zh": "Label 数据类型"
     }
    ],
    "answer": [
     "B",
     "C",
     "D"
    ],
    "multi": true,
    "notes": "",
    "ref": [],
    "qZh": "Flow Designer支持变量数据类型来存储记录数据和复杂数据。以下哪些是受支持的变量数据类型？ （选择三项。）"
   },
   {
    "id": "p132",
    "q": "Which of the following statements is true about Guided Application Creator?",
    "options": [
     {
      "k": "A",
      "t": "The global scope option is turned on by default",
      "zh": "全局范围选项默认开启"
     },
     {
      "k": "B",
      "t": "Default access controls are automatically created",
      "zh": "自动创建默认访问控制"
     },
     {
      "k": "C",
      "t": "The welcome screen appears every time a new application is created",
      "zh": "每次创建新应用程序时都会出现欢迎屏幕\n自动创建"
     },
     {
      "k": "D",
      "t": "A scoped application user role is automatically created",
      "zh": "A 范围应用程序用户角色"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "以下关于引导式应用程序创建器的说法哪一项是正确的？"
   },
   {
    "id": "p133",
    "q": "What are the ways to designate data tables when using Guided Application Creator (GAC)? (Choose three.)",
    "options": [
     {
      "k": "A",
      "t": "Upload an existing PDF",
      "zh": "上传现有 PDF"
     },
     {
      "k": "B",
      "t": "Create a new table on the platform",
      "zh": "在平台上创建新表"
     },
     {
      "k": "C",
      "t": "Use a freeform database",
      "zh": "使用自由格式数据库"
     },
     {
      "k": "D",
      "t": "Upload an existing spreadsheet",
      "zh": "上传现有电子表格"
     },
     {
      "k": "E",
      "t": "Use an existing table on the platform",
      "zh": "使用平台上现有的表"
     },
     {
      "k": "F",
      "t": "Upload an existing word processing document",
      "zh": "上传现有文字处理文档"
     }
    ],
    "answer": [
     "B",
     "D",
     "E"
    ],
    "multi": true,
    "notes": "",
    "ref": [],
    "qZh": "使用Guided Application Creator (GAC)时有哪些指定数据表的方法？ （选择三项。）"
   },
   {
    "id": "p134",
    "q": "What is the Event Registry?",
    "options": [
     {
      "k": "A",
      "t": "A Workflow which is launched every time an Event is generated; used to debug Events",
      "zh": "A 每次生成事件时启动的工作流程；用于调试事件"
     },
     {
      "k": "B",
      "t": "The Event Log which lists all Events that have been generated",
      "zh": "事件日志，列出已生成的所有事件"
     },
     {
      "k": "C",
      "t": "The method used in server side scripts to generate Events and pass parameters",
      "zh": "服务器端脚本中用于生成Events并传递参数的方法"
     },
     {
      "k": "D",
      "t": "A table containing a record for every Event known to the ServiceNow system which allows ServiceNow to react when Events are generated",
      "zh": "A 表包含 ServiceNow 系统已知的每个事件的记录，该表允许 ServiceNow 在生成事件时做出反应"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "什么是事件注册表？"
   },
   {
    "id": "p135",
    "q": "Identify the ways an application can respond to an Event generated by the gs.eventQueue() method: (Choose two.)",
    "options": [
     {
      "k": "A",
      "t": "Client Script",
      "zh": "Client 脚本"
     },
     {
      "k": "B",
      "t": "Email Notification",
      "zh": "E邮件通知"
     },
     {
      "k": "C",
      "t": "Scheduled Script Execution (Scheduled Job)",
      "zh": "Scheduled 脚本执行（计划作业）"
     },
     {
      "k": "D",
      "t": "Script Action",
      "zh": "脚本动作"
     },
     {
      "k": "E",
      "t": "UI Policy",
      "zh": "UI政策"
     }
    ],
    "answer": [
     "B",
     "D"
    ],
    "multi": true,
    "notes": "",
    "ref": [],
    "qZh": "确定应用程序响应 gs.eventQueue() 方法生成的事件的方式：（选择两项。）"
   },
   {
    "id": "p136",
    "q": "Is it possible to change an application's scope?",
    "options": [
     {
      "k": "A",
      "t": "No, it's not possible",
      "zh": "不，不可能"
     },
     {
      "k": "B",
      "t": "Yes, it's possible",
      "zh": "是的，有可能"
     },
     {
      "k": "C",
      "t": "Yes, but only from global scope to private scope",
      "zh": "是的，但仅限于从全局范围到私有范围"
     },
     {
      "k": "D",
      "t": "Yes, but only from private scope to global scope",
      "zh": "是的，但仅限于从私有范围到全局范围"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "是否可以更改应用程序的范围？"
   },
   {
    "id": "p137",
    "q": "Topic 1 Which of the following is true about g_scratchpad? (Choose two.)                         Topic 1",
    "options": [
     {
      "k": "A",
      "t": "Used to push information from the server to the client",
      "zh": "用于从服务器推送信息到客户端"
     },
     {
      "k": "B",
      "t": "Does not exist on the mobile platform",
      "zh": "在移动平台上不存在"
     },
     {
      "k": "C",
      "t": "Has constructors and methods",
      "zh": "H作为构造函数和方法"
     },
     {
      "k": "D",
      "t": "Has default properties passed by client-side scripts",
      "zh": "H为客户端脚本传递的默认属性"
     }
    ],
    "answer": [
     "A",
     "B"
    ],
    "multi": true,
    "notes": "",
    "ref": [],
    "qZh": "主题 1 以下关于 g_scratchpad 的说法哪一项是正确的？ （选择两项。） 主题 1"
   },
   {
    "id": "p138",
    "q": "Client-side scripts manage what?",
    "options": [
     {
      "k": "A",
      "t": "User access",
      "zh": "用户访问"
     },
     {
      "k": "B",
      "t": "Database and backend",
      "zh": "数据库和后端"
     },
     {
      "k": "C",
      "t": "Playbook access",
      "zh": "Playbook访问"
     },
     {
      "k": "D",
      "t": "Forms and Form Fields",
      "zh": "Forms 和表单字段"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "客户端脚本管理什么？"
   },
   {
    "id": "p139",
    "q": "When debugging Email Notifications, what must you check on a user record? (Choose two.)",
    "options": [
     {
      "k": "A",
      "t": "Active must be true.",
      "zh": "Active 必须为 true。"
     },
     {
      "k": "B",
      "t": "The Email field must have a valid value.",
      "zh": "电子邮件字段必须具有有效值。"
     },
     {
      "k": "C",
      "t": "The user must not be locked out.",
      "zh": "用户不得被锁定。"
     },
     {
      "k": "D",
      "t": "The First name and Last name fields must have values.",
      "zh": "名字和姓氏字段必须有值。\n必须启用"
     },
     {
      "k": "E",
      "t": "Delegation must be enabled.",
      "zh": "Delegation。"
     }
    ],
    "answer": [
     "A",
     "B"
    ],
    "multi": true,
    "notes": "",
    "ref": [],
    "qZh": "调试电子邮件通知时，必须检查用户记录的哪些内容？ （选择两个。）"
   },
   {
    "id": "p140",
    "q": "When crafting a scoped application that contains flow actions, what is the application called?",
    "options": [
     {
      "k": "A",
      "t": "Action",
      "zh": "动作"
     },
     {
      "k": "B",
      "t": "Spoke",
      "zh": "集成功能包（Spoke）"
     },
     {
      "k": "C",
      "t": "Bundle",
      "zh": "应用包"
     },
     {
      "k": "D",
      "t": "Flow",
      "zh": "流程"
     }
    ],
    "answer": [
     "B"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "当制作包含流程操作的范围应用程序时，该应用程序被称为什么？"
   },
   {
    "id": "p141",
    "q": "Which are reasons an application could be developed on the ServiceNow platform? (Choose three.)",
    "options": [
     {
      "k": "A",
      "t": "It needs workflow to manage processes.",
      "zh": "需要工作流来管理流程。"
     },
     {
      "k": "B",
      "t": "It requires reporting capabilities.",
      "zh": "需要报告功能。"
     },
     {
      "k": "C",
      "t": "It uses forms extensively to interact with data.",
      "zh": "广泛使用表单与数据交互。"
     },
     {
      "k": "D",
      "t": "It requires low-level programming libraries.",
      "zh": "需要低级编程库。"
     },
     {
      "k": "E",
      "t": "It uses multimedia features.",
      "zh": "它使用多媒体功能。"
     }
    ],
    "answer": [
     "A",
     "B",
     "C"
    ],
    "multi": true,
    "notes": "",
    "ref": [],
    "qZh": "在ServiceNow平台上开发应用程序的原因有哪些？ （选择三项。）"
   },
   {
    "id": "p142",
    "q": "Once an application is ready to share, which of the following methods of publishing are supported by ServiceNow? (Choose three.)",
    "options": [
     {
      "k": "A",
      "t": "Publish to an application repository",
      "zh": "发布到应用程序存储库"
     },
     {
      "k": "B",
      "t": "Publish to a local drive",
      "zh": "发布到本地驱动器"
     },
     {
      "k": "C",
      "t": "Publish to the ServiceNow Store",
      "zh": "发布到 ServiceNow 商店"
     },
     {
      "k": "D",
      "t": "Publish to an Update Set",
      "zh": "发布到更新集"
     },
     {
      "k": "E",
      "t": "Publish to a spreadsheet",
      "zh": "发布到电子表格"
     },
     {
      "k": "F",
      "t": "Publish to a local USB device",
      "zh": "发布到本地USB设备"
     }
    ],
    "answer": [
     "A",
     "C",
     "D"
    ],
    "multi": true,
    "notes": "",
    "ref": [],
    "qZh": "一旦应用程序准备好共享，ServiceNow 支持以下哪种发布方法？ （选择三项。）"
   },
   {
    "id": "p143",
    "q": "Topic 1 What is required to link a ServiceNow application to a Git repository? (Choose three.)",
    "options": [
     {
      "k": "A",
      "t": "URI",
      "zh": "URI"
     },
     {
      "k": "B",
      "t": "ACL",
      "zh": "ACL"
     },
     {
      "k": "C",
      "t": "Application name",
      "zh": "应用程序名称"
     },
     {
      "k": "D",
      "t": "Password",
      "zh": "密码"
     },
     {
      "k": "E",
      "t": "User name",
      "zh": "用户名"
     },
     {
      "k": "F",
      "t": "URL",
      "zh": "URL"
     }
    ],
    "answer": [
     "A",
     "D",
     "E"
    ],
    "multi": true,
    "notes": "",
    "ref": [],
    "qZh": "Topic 1 将 ServiceNow 应用程序链接到 Git 存储库需要什么？ （选择三项。）"
   },
   {
    "id": "p144",
    "q": "What is the Endpoint when configuring a REST Message?",
    "options": [
     {
      "k": "A",
      "t": "The URI of the WebServer",
      "zh": "Web服务器的URI"
     },
     {
      "k": "B",
      "t": "The command to the REST script to stop execution",
      "zh": "REST脚本停止执行的命令"
     },
     {
      "k": "C",
      "t": "Tne URI of the data to be accessed, queried, or modified",
      "zh": "Tne 要访问、查询或修改的数据的 URI"
     },
     {
      "k": "D",
      "t": "The provider response indicates there is no data to send back",
      "zh": "提供商响应表明没有数据要发回"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "配置REST消息时的端点是什么？"
   },
   {
    "id": "p145",
    "q": "Which client-side scripts apply to Record Producers? (Choose two.)",
    "options": [
     {
      "k": "A",
      "t": "Fix Scripts",
      "zh": "Fix 脚本"
     },
     {
      "k": "B",
      "t": "Catalog Client Scripts",
      "zh": "Catalog 客户端脚本"
     },
     {
      "k": "C",
      "t": "UI Scripts",
      "zh": "UI 脚本"
     },
     {
      "k": "D",
      "t": "Catalog UI Policies",
      "zh": "Catalog UI 策略"
     },
     {
      "k": "E",
      "t": "Record Producer Polices",
      "zh": "Record 制作者策略"
     }
    ],
    "answer": [
     "B",
     "D"
    ],
    "multi": true,
    "notes": "",
    "ref": [],
    "qZh": "哪些客户端脚本适用于唱片制作人？ （选择两个。）"
   },
   {
    "id": "p146",
    "q": "Which business requirements and process(es) should be documented as part of the application development plan? (Choose four.)",
    "options": [
     {
      "k": "A",
      "t": "Available licenses",
      "zh": "可用许可证"
     },
     {
      "k": "B",
      "t": "Business problem",
      "zh": "业务问题"
     },
     {
      "k": "C",
      "t": "Process steps",
      "zh": "工艺步骤"
     },
     {
      "k": "D",
      "t": "Users/stakeholders",
      "zh": "用户/利益相关者"
     },
     {
      "k": "E",
      "t": "Database capacity",
      "zh": "数据库容量"
     },
     {
      "k": "F",
      "t": "Project schedule",
      "zh": "项目进度表"
     },
     {
      "k": "G",
      "t": "Data input/output",
      "zh": "数据输入/输出"
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
    "ref": [],
    "qZh": "哪些业务需求和流程应记录为应用程序开发计划的一部分？ （选择四个。）"
   },
   {
    "id": "p147",
    "q": "Which objects are used as part of the client-side scripting API? (Choose two.)",
    "options": [
     {
      "k": "A",
      "t": "gs",
      "zh": "gs"
     },
     {
      "k": "B",
      "t": "current ana previous",
      "zh": "当前和先前"
     },
     {
      "k": "C",
      "t": "g_user",
      "zh": "g_user"
     },
     {
      "k": "D",
      "t": "workflow.scratchpad",
      "zh": "workflow.scratchpad"
     },
     {
      "k": "E",
      "t": "g_form",
      "zh": "g_form"
     }
    ],
    "answer": [
     "C",
     "E"
    ],
    "multi": true,
    "notes": "",
    "ref": [],
    "qZh": "哪些对象用作客户端脚本 API 的一部分？ （选择两个。）"
   },
   {
    "id": "p148",
    "q": "When creating application tables, a user role is automatically added to the table record. Which other role does an application typically have?",
    "options": [
     {
      "k": "A",
      "t": "Application Super User",
      "zh": "Application超级用户"
     },
     {
      "k": "B",
      "t": "Application Fulfiller",
      "zh": "应用程序履行者"
     },
     {
      "k": "C",
      "t": "Application Admin",
      "zh": "应用程序管理"
     },
     {
      "k": "D",
      "t": "Application Manager",
      "zh": "应用程序管理器"
     }
    ],
    "answer": [
     "C"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "创建应用表时，用户角色会自动添加到表记录中。应用程序通常还具有哪些其他角色？"
   },
   {
    "id": "p149",
    "q": "Which determines the relationships between field in an Import Set table to field in an existing ServiceNow table?",
    "options": [
     {
      "k": "A",
      "t": "Data Sources",
      "zh": "数据源"
     },
     {
      "k": "B",
      "t": "Schema Map Relationship Builder",
      "zh": "Schema 映射关系生成器"
     },
     {
      "k": "C",
      "t": "Business Service Management Map",
      "zh": "业务服务管理地图"
     },
     {
      "k": "D",
      "t": "Transform Map",
      "zh": "变换映射"
     }
    ],
    "answer": [
     "D"
    ],
    "multi": false,
    "notes": "",
    "ref": [],
    "qZh": "哪个确定导入集表中的字段与现有 ServiceNow 表中的字段之间的关系？"
   },
   {
    "id": "p150",
    "q": "What data types of Flow Designer variables are supported to store record data and complex data? (Choose three.)",
    "options": [
     {
      "k": "A",
      "t": "Label data type",
      "zh": "Label 数据类型"
     },
     {
      "k": "B",
      "t": "Integer",
      "zh": "整数"
     },
     {
      "k": "C",
      "t": "Array.Reference",
      "zh": "Array.Reference"
     },
     {
      "k": "D",
      "t": "Choice",
      "zh": "选项"
     },
     {
      "k": "E",
      "t": "String",
      "zh": "字符串"
     }
    ],
    "answer": [
     "B",
     "C",
     "E"
    ],
    "multi": true,
    "notes": "",
    "ref": [],
    "qZh": "流程设计器变量支持哪些数据类型来存储记录数据和复杂数据？ （选择三项。）"
   },
   {
    "id": "p151",
    "q": "What are the features of Flow Designer? (Choose three.)",
    "options": [
     {
      "k": "A",
      "t": "Add stages to a flow.",
      "zh": "向流程添加阶段。"
     },
     {
      "k": "B",
      "t": "Call a flow from another flow or subflow.",
      "zh": "从另一个流或子流调用一个流。"
     },
     {
      "k": "C",
      "t": "Test a flow using the \"Run as\" feature.",
      "zh": "使用“运行方式”功能测试流程。"
     },
     {
      "k": "D",
      "t": "Support Java Scripting code to test conditions that trigger the flow.",
      "zh": "支持 Java 脚本代码来测试触发流程的条件。"
     },
     {
      "k": "E",
      "t": "Run a flow from a Catalog item.",
      "zh": "从目录项运行流程。"
     },
     {
      "k": "F",
      "t": "Perform form field data validation at client side.",
      "zh": "在客户端执行表单字段数据验证。"
     }
    ],
    "answer": [
     "A",
     "B",
     "C"
    ],
    "multi": true,
    "notes": "",
    "ref": [],
    "qZh": "流程设计器有哪些功能？ （选择三项。）"
   }
  ]
 }
];
