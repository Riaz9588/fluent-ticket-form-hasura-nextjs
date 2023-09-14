let surveyJSON = {
    "logoFit": "none",
    "logoPosition": "right",
    "pages": [
        {
            "elements": [
                {
                    "allowClear": false,
                    "choices": [
                        {
                            "text": {
                                "ar": "شكوى",
                                "default": "Complaints"
                            },
                            "value": "Complaints"
                        },
                        {
                            "text": {
                                "ar": "طلب",
                                "default": "Request"
                            },
                            "value": "Request"
                        },
                        {
                            "text": {
                                "ar": "استفسار",
                                "default": "Inquiry"
                            },
                            "value": "Inquiry"
                        },
                        {
                            "text": {
                                "ar": "اقتراح",
                                "default": "Suggestion "
                            },
                            "value": "Suggestion"
                        }
                    ],
                    "name": "Ticket Type",
                    "placeholder": {
                        "ar": "نوع التذكرة",
                        "default": "Ticket Type"
                    },
                    "title": {
                        "ar": "نوع التذكرة",
                        "default": "Ticket Type"
                    },
                    "type": "dropdown"
                },
                {
                    "allowClear": false,
                    "autocomplete": "impp",
                    "choices": [
                        {
                            "text": {
                                "ar": "المطالبات والاعتراضات",
                                "default": "Claim and Dispute"
                            },
                            "value": "Claim and Dispute",
                            "visibleIf": "{Ticket Type} = 'Request'"
                        },
                        {
                            "text": {
                                "ar": "انشاء حساب وتسجيل الدخول",
                                "default": "Login & Registration"
                            },
                            "value": "Login & Registration",
                            "visibleIf": "{Ticket Type} anyof ['Complaints', 'Inquiry', 'Suggestion']"
                        },
                        {
                            "text": {
                                "ar": "الحساب",
                                "default": "Account"
                            },
                            "value": "Account",
                            "visibleIf": "{Ticket Type} anyof ['Complaints', 'Request', 'Inquiry', 'Suggestion']"
                        },
                        {
                            "text": {
                                "ar": "البطاقات",
                                "default": "Cards"
                            },
                            "value": "Cards",
                            "visibleIf": "{Ticket Type} anyof ['Complaints', 'Request', 'Inquiry', 'Suggestion']"
                        },
                        {
                            "text": {
                                "ar": "المدفوعات والعمليات",
                                "default": "Payment & Transactions"
                            },
                            "value": "Payment & Transactions",
                            "visibleIf": "{Ticket Type} anyof ['Complaints', 'Inquiry', 'Suggestion']"
                        },
                        {
                            "text": {
                                "ar": "تطبيق طويق",
                                "default": "Tweeq App"
                            },
                            "value": "Tweeq App",
                            "visibleIf": "{Ticket Type} anyof ['Inquiry', 'Suggestion']"
                        },
                        {
                            "text": {
                                "ar": "الاحتيال",
                                "default": "Fraud"
                            },
                            "value": "Fraud",
                            "visibleIf": "{Ticket Type} = 'Complaints'"
                        },
                        {
                            "text": {
                                "ar": "بيانات العميل",
                                "default": "Customer information"
                            },
                            "value": "Customer information",
                            "visibleIf": "{Ticket Type} = 'Request'"
                        }
                    ],
                    "name": "Category",
                    "placeholder": {
                        "ar": "التصنيف",
                        "default": "Category..."
                    },
                    "title": {
                        "ar": "التصنيف",
                        "default": "Category"
                    },
                    "type": "dropdown",
                    "visibleIf": "{Ticket Type} notempty"
                },
                {
                    "allowClear": false,
                    "choices": [
                        {
                            "text": {
                                "ar": "مدفوعات غير مصرحة",
                                "default": "Unauthorized payment"
                            },
                            "value": "Unauthorized payment",
                            "visibleIf": "({Ticket Type} = 'Request') and ({Category} = 'Claim and Dispute')"
                        },
                        {
                            "text": {
                                "ar": "تم خصم مبلغ خاطئ",
                                "default": "Wrong Amount Deducted"
                            },
                            "value": "Wrong Amount Deduction",
                            "visibleIf": "({Ticket Type} = 'Request') and ({Category} = 'Claim and Dispute')"
                        },
                        {
                            "text": {
                                "ar": "عملية مكررة",
                                "default": "Duplicate Deduction"
                            },
                            "value": "Duplicated Deduction",
                            "visibleIf": "({Ticket Type} = 'Request') and ({Category} = 'Claim and Dispute')"
                        },
                        {
                            "text": {
                                "ar": "مرفوض لكن تم الخصم",
                                "default": "Declined but Deducted"
                            },
                            "value": "Declined but Deducted",
                            "visibleIf": "({Ticket Type} = 'Request') and ({Category} = 'Claim and Dispute')"
                        },
                        {
                            "text": {
                                "ar": "تم الخصم لكن لم يتم استلام السلعة",
                                "default": "Deducted but item not Received"
                            },
                            "value": "Deducted but item not Received",
                            "visibleIf": "({Ticket Type} = 'Request') and ({Category} = 'Claim and Dispute')"
                        },
                        {
                            "text": {
                                "ar": "لم يتم استلام المبلغ المسترد من التاجر",
                                "default": "Refund not Received from Merchant"
                            },
                            "value": "Refund not Received from Merchant",
                            "visibleIf": "({Ticket Type} = 'Request') and ({Category} = 'Claim and Dispute')"
                        },
                        {
                            "text": {
                                "ar": "تم التحويل إلى حساب خاطئ",
                                "default": "Transferred to a wrong account"
                            },
                            "value": "Transferred to a wrong account",
                            "visibleIf": "({Ticket Type} = 'Request') and ({Category} = 'Claim and Dispute')"
                        },
                        {
                            "text": {
                                "ar": "المبلغ لم يخرج من الصرافة",
                                "default": "ATM did not dispense"
                            },
                            "value": "ATM did not dispense",
                            "visibleIf": "({Ticket Type} = 'Request') and ({Category} = 'Claim and Dispute')"
                        },
                        {
                            "text": {
                                "ar": "لم يتم استلام عملية مستردة من الصرافة",
                                "default": "ATM Reversal amount not received"
                            },
                            "value": "ATM Reversal amount not received",
                            "visibleIf": "({Ticket Type} = 'Request') and ({Category} = 'Claim and Dispute')"
                        },
                        {
                            "text": {
                                "ar": "خروج مبلغ ناقص من الصرافة",
                                "default": "ATM Partial Dispense"
                            },
                            "value": "ATM Partial Dispense",
                            "visibleIf": "({Ticket Type} = 'Request') and ({Category} = 'Claim and Dispute')"
                        },
                        {
                            "text": {
                                "ar": "اعتراض على رصيد الحساب",
                                "default": "Dispute on account balance"
                            },
                            "value": "Dispute on account balance",
                            "visibleIf": "({Ticket Type} = 'Request') and ({Category} = 'Claim and Dispute')"
                        },
                        {
                            "text": {
                                "ar": "اعتراض على سعر صرف العملات",
                                "default": "Dispute on Exchange rate"
                            },
                            "value": "Dispute on Exchange rate",
                            "visibleIf": "({Ticket Type} = 'Request') and ({Category} = 'Claim and Dispute')"
                        },
                        {
                            "text": {
                                "ar": "اعتراض على رسوم التحويل",
                                "default": "Dispute on transfer fees"
                            },
                            "value": "Dispute on transfer fees",
                            "visibleIf": "({Ticket Type} = 'Request') and ({Category} = 'Claim and Dispute')"
                        },
                        {
                            "text": {
                                "ar": "لا يمكن انشاء حساب",
                                "default": "Can’t Register"
                            },
                            "value": "Can’t Register",
                            "visibleIf": "({Ticket Type} = 'Complaints') and ({Category} = 'Login & Registration')"
                        },
                        {
                            "text": {
                                "ar": "لا يمكن تسجيل الدخول",
                                "default": "Can’t login"
                            },
                            "value": "Can’t login",
                            "visibleIf": "({Ticket Type} = 'Complaints') and ({Category} = 'Login & Registration')"
                        },
                        {
                            "text": {
                                "ar": "لا يمكن استعادة كلمة المرور",
                                "default": "Can’t reset password"
                            },
                            "value": "Can’t reset password",
                            "visibleIf": "({Ticket Type} = 'Complaints') and ({Category} = 'Login & Registration')"
                        },
                        {
                            "text": {
                                "ar": "تاخر او فشل في عكس عملية",
                                "default": "Delay or failed to reflect transaction"
                            },
                            "value": "Delay or failed to reflect transaction",
                            "visibleIf": "({Ticket Type} = 'Complaints') and ({Category} = 'Account')"
                        },
                        {
                            "text": {
                                "ar": "تحويل لحساب طويق",
                                "default": "Send to Tweeq ewallet (P2P)"
                            },
                            "value": "Send to Tweeq ewallet (P2P)",
                            "visibleIf": "{Ticket Type} anyof ['Complaints', 'Inquiry'] and {Category} = 'Payment & Transactions'"
                        },
                        {
                            "text": {
                                "ar": "تحويل لبنك محلي",
                                "default": "Transfer to local bank"
                            },
                            "value": "Transfer to local bank",
                            "visibleIf": "{Ticket Type} anyof ['Complaints', 'Inquiry'] and {Category} = 'Payment & Transactions'"
                        },
                        {
                            "text": {
                                "ar": "تحويل دولي",
                                "default": "International Transfer"
                            },
                            "value": "International Transfer",
                            "visibleIf": "{Ticket Type} anyof ['Complaints', 'Inquiry'] and {Category} = 'Payment & Transactions'"
                        },
                        {
                            "text": {
                                "ar": "مدفوعات سداد",
                                "default": "Sadad payments"
                            },
                            "value": "Sadad payments",
                            "visibleIf": "{Ticket Type} anyof ['Complaints', 'Inquiry'] and {Category} = 'Payment & Transactions'"
                        },
                        {
                            "text": {
                                "ar": "ادارة المستفيدين",
                                "default": "Beneficiary Management"
                            },
                            "value": "Beneficiary Management",
                            "visibleIf": "{Ticket Type} anyof ['Complaints', 'Inquiry'] and {Category} = 'Payment & Transactions'"
                        },
                        {
                            "text": {
                                "ar": "عملية مرفوضة مع وجود رصيد في الحساب ",
                                "default": "Transactions Declined with available balance"
                            },
                            "value": "Transactions Declined with available balance",
                            "visibleIf": "({Ticket Type} = 'Complaints') and ({Category} = 'Payment & Transactions')"
                        },
                        {
                            "text": {
                                "ar": "اصدار بطاقة رقمية",
                                "default": "Issuing Virtual card"
                            },
                            "value": "Issuing Virtual card",
                            "visibleIf": "({Ticket Type} = 'Complaints') and ({Category} = 'Cards')"
                        },
                        {
                            "text": {
                                "ar": "اصدار بطاقة بلاستيكيه",
                                "default": "Issuing Physical Card"
                            },
                            "value": "Issuing Physical Card",
                            "visibleIf": "({Ticket Type} = 'Complaints') and ({Category} = 'Cards')"
                        },
                        {
                            "text": {
                                "ar": "ادارة البطاقات",
                                "default": "Card Management"
                            },
                            "value": "Card Management",
                            "visibleIf": "({Ticket Type} = 'Complaints') and ({Category} = 'Cards')"
                        },
                        {
                            "text": {
                                "ar": "فتح حساب بدون طلب العميل",
                                "default": "Account opened with out my request"
                            },
                            "value": "Account opened with out my request",
                            "visibleIf": "({Ticket Type} = 'Complaints') and ({Category} = 'Fraud')"
                        },
                        {
                            "text": {
                                "ar": "اصدار بطاقة بدون طلب العميل",
                                "default": "Card Issued without my request"
                            },
                            "value": "Card Issued without my request",
                            "visibleIf": "({Ticket Type} = 'Complaints') and ({Category} = 'Fraud')"
                        },
                        {
                            "text": {
                                "ar": "الدخول إلى الحساب بدون إذن",
                                "default": "Accessing to account without permission"
                            },
                            "value": "Accessing to account without permission",
                            "visibleIf": "({Ticket Type} = 'Complaints') and ({Category} = 'Fraud')"
                        },
                        {
                            "text": {
                                "ar": "عملية مرفوضة لم يتم إجراؤها من قبل العميل",
                                "default": "Declined transaction not made by customer"
                            },
                            "value": "Declined transaction not made by me",
                            "visibleIf": "({Ticket Type} = 'Complaints') and ({Category} = 'Fraud')"
                        },
                        {
                            "text": {
                                "ar": "فتح حساب في طويق",
                                "default": "How to open a tweeq account"
                            },
                            "value": "How to open a Tweeq account",
                            "visibleIf": "({Ticket Type} = 'Inquiry') and ({Category} = 'Login & Registration')"
                        },
                        {
                            "text": {
                                "ar": "استعادة لكلمة المرور ",
                                "default": "How to reset app passcode"
                            },
                            "value": "How to reset App passcode",
                            "visibleIf": "({Ticket Type} = 'Inquiry') and ({Category} = 'Login & Registration')"
                        },
                        {
                            "text": {
                                "ar": "استخدام التطبيق دوليًا",
                                "default": "How to use App internationally"
                            },
                            "value": "How to use App internationally",
                            "visibleIf": "({Ticket Type} = 'Inquiry') and ({Category} = 'Login & Registration')"
                        },
                        {
                            "text": {
                                "ar": "اضافة وتحديث رقم الجوال والايميل والعنوان",
                                "default": "Add & update contact details (phone, email, home address)"
                            },
                            "value": "Add & update contact details (phone, email, home address)",
                            "visibleIf": "{Ticket Type} = 'Inquiry' and {Category} = 'Tweeq App'"
                        },
                        {
                            "text": {
                                "ar": "تفعيل الحساب",
                                "default": "How to activate the account"
                            },
                            "value": "How to activate the account",
                            "visibleIf": "({Ticket Type} = 'Inquiry') and ({Category} = 'Account')"
                        },
                        {
                            "text": {
                                "ar": "عرض وتحميل كشف الحساب",
                                "default": "View and download account statement"
                            },
                            "value": "View and download account statement",
                            "visibleIf": "({Ticket Type} = 'Inquiry') and ({Category} = 'Account')"
                        },
                        {
                            "text": {
                                "ar": " اضافة وتحديث بياناتي (الدخل الشهري، الحالة والوظيفية، المهنة)",
                                "default": "Add & Update customer information (Monthly income, Employment status, Profession)"
                            },
                            "value": "Add & Update customer information (Monthly income, Employment status, Profession)",
                            "visibleIf": "{Ticket Type} = 'Inquiry' and {Category} = 'Tweeq App'"
                        },
                        {
                            "text": {
                                "ar": "اضافة وتعديل الخصوصية والامان (بصمة الوجة، رقم المرور، الاجهزة المرتبطة)",
                                "default": "Add & Update Privacy & security (Face ID, Passcode, Linked devices)"
                            },
                            "value": "Add & Update Privacy & security (Face ID, Passcode, Linked devices)",
                            "visibleIf": "{Ticket Type} = 'Inquiry' and {Category} = 'Tweeq App'"
                        },
                        {
                            "text": {
                                "ar": "اضافة وتحديث الاشعارات",
                                "default": "Add & Update Notifications"
                            },
                            "value": "Add & Update Notifications",
                            "visibleIf": "{Ticket Type} = 'Inquiry' and {Category} = 'Tweeq App'"
                        },
                        {
                            "text": {
                                "ar": "اعدادات التطبيق (تغيير اللغة",
                                "default": "App setting ( Change the language"
                            },
                            "value": "App setting ( Change the language",
                            "visibleIf": "{Ticket Type} = 'Inquiry' and {Category} = 'Tweeq App'"
                        },
                        {
                            "text": {
                                "ar": "توصيل البطاقات",
                                "default": "Card delivery"
                            },
                            "value": "Card Delivery",
                            "visibleIf": "({Ticket Type} = 'Inquiry') and ({Category} = 'Cards')"
                        },
                        {
                            "text": {
                                "ar": " اعدادات البطاقة تفعيل او ايقاف مدى، الدفع عبر الانترنت، التجوال",
                                "default": "Card Setting, enable mada, enable online payment, enable roaming"
                            },
                            "value": "Card Setting, enable mada, enable online payment, enable roaming",
                            "visibleIf": "{Ticket Type} = 'Inquiry' and {Category} = 'Cards'"
                        },
                        {
                            "text": {
                                "ar": "تاريخ انتهاء البطاقة",
                                "default": "Card expiry date"
                            },
                            "value": "Card expiry date",
                            "visibleIf": "({Ticket Type} = 'Inquiry') and ({Category} = 'Cards')"
                        },
                        {
                            "text": {
                                "ar": "استبدال البطاقة",
                                "default": "Card replacement"
                            },
                            "value": "Card replacement",
                            "visibleIf": "({Ticket Type} = 'Inquiry') and ({Category} = 'Cards')"
                        },
                        {
                            "text": {
                                "ar": "تغيير الاسم المكتوب في البطاقة",
                                "default": "Change the cardholder name"
                            },
                            "value": "Change the cardholder name",
                            "visibleIf": "({Ticket Type} anyof ['Inquiry', 'Request']) and ({Category} = 'Cards')"
                        },
                        {
                            "text": {
                                "ar": "اضافة الرصيد للمحفظة",
                                "default": "How to Top up"
                            },
                            "value": "How to Top up",
                            "visibleIf": "({Ticket Type} = 'Inquiry') and ({Category} = 'Payment & Transactions')"
                        },
                        {
                            "text": {
                                "ar": "طريقة عرض سعر صرف العملات",
                                "default": "Exchange rate"
                            },
                            "value": "Exchange rate",
                            "visibleIf": "({Ticket Type} = 'Inquiry') and ({Category} = 'Payment & Transactions')"
                        },
                        {
                            "text": {
                                "ar": "رسوم السحب النقدي",
                                "default": "Withdrawal fees"
                            },
                            "value": "Withdrawal fees",
                            "visibleIf": "({Ticket Type} = 'Inquiry') and ({Category} = 'Payment & Transactions')"
                        },
                        {
                            "text": {
                                "ar": "طريقة ايقاف اشتراك بالبطاقة",
                                "default": "How to stop subscriptions"
                            },
                            "value": "How to stop subscriptions",
                            "visibleIf": "({Ticket Type} = 'Inquiry') and ({Category} = 'Payment & Transactions')"
                        },
                        {
                            "text": {
                                "ar": "حدود الحساب",
                                "default": "Account limit"
                            },
                            "value": "Account limit",
                            "visibleIf": "{Ticket Type} = 'Inquiry' and {Category} = 'Account'"
                        },
                        {
                            "text": {
                                "ar": "طريقة تفعيل سريع للتحويلات",
                                "default": "How to activate SARIE transfer"
                            },
                            "value": "How to activate SARIE transfer",
                            "visibleIf": "{Ticket Type} = 'Inquiry' and {Category} = 'Account'"
                        },
                        {
                            "text": {
                                "ar": "فتح حساب اضافي",
                                "default": "Open additional account"
                            },
                            "value": "Open additional account",
                            "visibleIf": "({Ticket Type} = 'Suggestion') and ({Category} = 'Account')"
                        },
                        {
                            "text": {
                                "ar": "تحديث تاريخ انتهاء الهوية",
                                "default": "Update customer ID expiry date"
                            },
                            "value": "Update customer ID expiry date",
                            "visibleIf": "({Ticket Type} = 'Request') and ({Category} = 'Customer information')"
                        },
                        {
                            "text": {
                                "ar": "تفعيل حساب مجمد",
                                "default": "Activate freeze account"
                            },
                            "value": "Activate freeze account",
                            "visibleIf": "({Ticket Type} = 'Request') and ({Category} = 'Account')"
                        },
                        {
                            "text": {
                                "ar": "تصفية الحساب",
                                "default": "Account clearance"
                            },
                            "value": "Account clearance",
                            "visibleIf": "({Ticket Type} = 'Request') and ({Category} = 'Account')"
                        },
                        {
                            "text": {
                                "ar": "فتح حساب مغلق",
                                "default": "Unlock the account"
                            },
                            "value": "Unlock the account",
                            "visibleIf": "({Ticket Type} = 'Request') and ({Category} = 'Account')"
                        },
                        {
                            "text": {
                                "ar": "ايقاف البطاقة",
                                "default": "Stop card"
                            },
                            "value": "Stop card",
                            "visibleIf": "({Ticket Type} = 'Request') and ({Category} = 'Cards')"
                        },
                        {
                            "text": {
                                "ar": "ارسال البطاقة دولي",
                                "default": "Release hold amount"
                            },
                            "value": "Send card internationally",
                            "visibleIf": "{Ticket Type} = 'Request' and {Category} = 'Account'"
                        }
                    ],
                    "name": "Sub Category",
                    "placeholder": {
                        "ar": "التصنيف الفرعي",
                        "default": "Sub Category..."
                    },
                    "title": {
                        "ar": "التصنيف الفرعي",
                        "default": "Sub Category"
                    },
                    "type": "dropdown",
                    "visibleIf": "{Ticket Type} anyof ['Complaints', 'Inquiry', 'Request'] and {Category} anyof ['Claim and Dispute', 'Login & Registration', 'Account', 'Cards', 'Payment & Transactions', 'Tweeq App', 'Fraud', 'Customer information'] and {Category} notempty"
                },
                {
                    "allowClear": false,
                    "choices": [
                        {
                            "text": {
                                "ar": "خطا عام",
                                "default": "General error"
                            },
                            "value": "General error",
                            "visibleIf": "(({Ticket Type} = 'Complaints') and ({Category} = 'Login & Registration')) and ({Sub Category} = 'Can’t Register')"
                        },
                        {
                            "text": {
                                "ar": " رقم الهوية أو تاريخ ميلاد غير صحيح",
                                "default": "Invalid ID or wrong date of birth."
                            },
                            "value": "Invalid ID or wrong date of birth.",
                            "visibleIf": "(({Ticket Type} = 'Complaints') and ({Category} = 'Login & Registration')) and ({Sub Category} = 'Can’t Register')"
                        },
                        {
                            "text": {
                                "ar": "لم يتم استلام رمز التحقق",
                                "default": "OTP not received"
                            },
                            "value": "OTP not received",
                            "visibleIf": "(({Ticket Type} = 'Complaints') and ({Category} = 'Login & Registration')) and ({Sub Category} anyof ['Can’t Register', 'Can’t login', 'Can’t reset password'])"
                        },
                        {
                            "text": {
                                "ar": "رقم الجوال مسجل في طويق والعميل ياكد ان الرقم جديد وتحت هويته",
                                "default": "Mobile already registered & customer confirm its new number under his ID"
                            },
                            "value": "Mobile already registered & customer confirm its new number under his ID",
                            "visibleIf": "(({Ticket Type} = 'Complaints') and ({Category} = 'Login & Registration')) and ({Sub Category} = 'Can’t Register')"
                        },
                        {
                            "text": {
                                "ar": "مشكلة في التطبيق فشل في تسجيل الدخول",
                                "default": "App has a bug it Failed to login"
                            },
                            "value": "App has a bug it Failed to login",
                            "visibleIf": "(({Ticket Type} = 'Complaints') and ({Category} = 'Login & Registration')) and ({Sub Category} = 'Can’t login')"
                        },
                        {
                            "text": {
                                "ar": "لم يتم قبول الرمز الجديد",
                                "default": "The new password is not accepted"
                            },
                            "value": "The new password is not accepted",
                            "visibleIf": "(({Ticket Type} = 'Complaints') and ({Category} = 'Login & Registration')) and ({Sub Category} = 'Can’t reset password')"
                        },
                        {
                            "text": {
                                "ar": "شحن المحفظة باستخدام مدى",
                                "default": "Mada Card Topup"
                            },
                            "value": "Mada Card Topup",
                            "visibleIf": "(({Ticket Type} = 'Complaints') and ({Category} = 'Account')) and ({Sub Category} = 'Delay or failed to reflect transaction')"
                        },
                        {
                            "text": {
                                "ar": "شحن المحفظة باستخدام البطاقة الائتمانية",
                                "default": "Credit card Topup"
                            },
                            "value": "Credit card Topup",
                            "visibleIf": "(({Ticket Type} = 'Complaints') and ({Category} = 'Account')) and ({Sub Category} = 'Delay or failed to reflect transaction')"
                        },
                        {
                            "text": {
                                "ar": "ايداع راتب",
                                "default": "Salary deposit"
                            },
                            "value": "Salary deposit",
                            "visibleIf": "(({Ticket Type} = 'Complaints') and ({Category} = 'Account')) and ({Sub Category} = 'Delay or failed to reflect transaction')"
                        },
                        {
                            "text": {
                                "ar": "حوالة واردة من حساب طويق P2P",
                                "default": "Receive from Tweeq Ewallet (P2P)"
                            },
                            "value": "Receive from Tweeq Ewallet (P2P)",
                            "visibleIf": "(({Ticket Type} = 'Complaints') and ({Category} = 'Account')) and ({Sub Category} = 'Delay or failed to reflect transaction')"
                        },
                        {
                            "text": {
                                "ar": "ايداع من بنك محلي",
                                "default": "Local Bank Deposit"
                            },
                            "value": "Local Bank Deposit",
                            "visibleIf": "(({Ticket Type} = 'Complaints') and ({Category} = 'Account')) and ({Sub Category} = 'Delay or failed to reflect transaction')"
                        },
                        {
                            "text": {
                                "ar": "ايداع من بنك دولي",
                                "default": "International Deposit"
                            },
                            "value": "International Deposit",
                            "visibleIf": "(({Ticket Type} = 'Complaints') and ({Category} = 'Account')) and ({Sub Category} = 'Delay or failed to reflect transaction')"
                        },
                        {
                            "text": {
                                "ar": " لا يمكن العثور على جهة اتصال نشطة في طويق",
                                "default": "Can’t Find an active contact in tweeq"
                            },
                            "value": "Can’t Find an active contact",
                            "visibleIf": "(({Ticket Type} = 'Complaints') and ({Category} = 'Payment & Transactions')) and ({Sub Category} = 'Send to Tweeq ewallet (P2P)')"
                        },
                        {
                            "text": {
                                "ar": "فشل اتمام التحويل",
                                "default": "Failed to complete the transfer"
                            },
                            "value": "Failed to complete the transfer",
                            "visibleIf": "(({Ticket Type} = 'Complaints') and ({Category} = 'Payment & Transactions')) and ({Sub Category} anyof ['Send to Tweeq ewallet (P2P)', 'Transfer to local bank'])"
                        },
                        {
                            "text": {
                                "ar": "تحويل الى حساب خطا",
                                "default": "Transferred to a wrong account"
                            },
                            "value": "Transferred to a wrong account",
                            "visibleIf": "(({Ticket Type} = 'Complaints') and ({Category} = 'Payment & Transactions')) and ({Sub Category} anyof ['Send to Tweeq ewallet (P2P)', 'Transfer to local bank'])"
                        },
                        {
                            "text": {
                                "ar": "لا يمكن اختيار المستفيد",
                                "default": "Unable to Select beneficiary"
                            },
                            "value": "Unable to Select beneficiary",
                            "visibleIf": "(({Ticket Type} = 'Complaints') and ({Category} = 'Payment & Transactions')) and ({Sub Category} anyof ['Transfer to local bank', 'International Transfer'])"
                        },
                        {
                            "text": {
                                "ar": "تاخر او فشل في ايداع حواله",
                                "default": "Delayed or failed to deposit the transfer"
                            },
                            "value": "Delayed or failed to deposit the transfer",
                            "visibleIf": "(({Ticket Type} = 'Complaints') and ({Category} = 'Payment & Transactions')) and ({Sub Category} = 'Transfer to local bank')"
                        },
                        {
                            "text": {
                                "ar": "المستفيد لم يتمكن من استلام الحوالة",
                                "default": "Unable to collect the amount transferred"
                            },
                            "value": "Unable to collect the amount transferred",
                            "visibleIf": "(({Ticket Type} = 'Complaints') and ({Category} = 'Payment & Transactions')) and ({Sub Category} = 'International Transfer')"
                        },
                        {
                            "text": {
                                "ar": "فشل دفع فاتورة سداد",
                                "default": "Failed to pay Sadad bill"
                            },
                            "value": "Failed to pay Sadad bill",
                            "visibleIf": "(({Ticket Type} = 'Complaints') and ({Category} = 'Payment & Transactions')) and ({Sub Category} = 'Sadad payments')"
                        },
                        {
                            "text": {
                                "ar": "لا يمكن اضافة مستفيد",
                                "default": "Unable to add beneficiary"
                            },
                            "value": "Unable to add beneficiary",
                            "visibleIf": "(({Ticket Type} = 'Complaints') and ({Category} = 'Payment & Transactions')) and ({Sub Category} = 'Beneficiary Management')"
                        },
                        {
                            "text": {
                                "ar": "لا يمكن تعديل مستفيد",
                                "default": "Unable to edit beneficiary"
                            },
                            "value": "Unable to edit beneficiary",
                            "visibleIf": "(({Ticket Type} = 'Complaints') and ({Category} = 'Payment & Transactions')) and ({Sub Category} = 'Beneficiary Management')"
                        },
                        {
                            "text": {
                                "ar": "لا يمكن تفعيل المستفيد",
                                "default": "Unable to activate beneficiary"
                            },
                            "value": "Unable to activate beneficiary",
                            "visibleIf": "(({Ticket Type} = 'Complaints') and ({Category} = 'Payment & Transactions')) and ({Sub Category} = 'Beneficiary Management')"
                        },
                        {
                            "text": {
                                "ar": "لا يمكن تفعيل حوالات سريع",
                                "default": "Unable to activate Sarie's payment"
                            },
                            "value": "Unable to activate Sarie's payment",
                            "visibleIf": "(({Ticket Type} = 'Complaints') and ({Category} = 'Payment & Transactions')) and ({Sub Category} = 'Beneficiary Management')"
                        },
                        {
                            "text": {
                                "ar": "لا يمكن اصدار بطاقة رقمية",
                                "default": "Can't issue a virtual card"
                            },
                            "value": "Can't issue a virtual card",
                            "visibleIf": "(({Ticket Type} = 'Complaints') and ({Category} = 'Cards')) and ({Sub Category} = 'Issuing Virtual card')"
                        },
                        {
                            "text": {
                                "ar": "التطبيق معلق في الصفحة الرئيسية",
                                "default": "App stock in loading page or crashed"
                            },
                            "value": "App stock in loading page or crashed",
                            "visibleIf": "(({Ticket Type} = 'Complaints') and ({Category} = 'Cards')) and ({Sub Category} = 'Issuing Virtual card')"
                        },
                        {
                            "text": {
                                "ar": "معلومات البطاقة خاطئة أو غير مكتملة",
                                "default": "Wrong or uncompleted card information"
                            },
                            "value": "Wrong or uncompleted card information",
                            "visibleIf": "(({Ticket Type} = 'Complaints') and ({Category} = 'Cards')) and ({Sub Category} = 'Issuing Virtual card')"
                        },
                        {
                            "text": {
                                "ar": "لم يتم استلام مكالمة التفعيل",
                                "default": "Activation call not received"
                            },
                            "value": "Activation call not received",
                            "visibleIf": "(({Ticket Type} = 'Complaints') and ({Category} = 'Cards')) and ({Sub Category} = 'Issuing Virtual card')"
                        },
                        {
                            "text": {
                                "ar": "لا يمكن استبدال بطاقة رقمية",
                                "default": "Cannot replace a virtual card"
                            },
                            "value": "Cannot replace a virtual card",
                            "visibleIf": "(({Ticket Type} = 'Complaints') and ({Category} = 'Cards')) and ({Sub Category} = 'Issuing Virtual card')"
                        },
                        {
                            "text": {
                                "ar": "فشل في طلب البطاقة الفعلية",
                                "default": "Failed to request physical card"
                            },
                            "value": "Failed to request physical card",
                            "visibleIf": "(({Ticket Type} = 'Complaints') and ({Category} = 'Cards')) and ({Sub Category} = 'Issuing Physical Card')"
                        },
                        {
                            "text": {
                                "ar": "تاخير توصيل البطاقة الفعلية",
                                "default": "Delayed to deliver physical card"
                            },
                            "value": "Delayed to deliver physical card",
                            "visibleIf": "(({Ticket Type} = 'Complaints') and ({Category} = 'Cards')) and ({Sub Category} = 'Issuing Physical Card')"
                        },
                        {
                            "text": {
                                "ar": "فشل توصيل البطاقة الفعلية",
                                "default": "Failed to deliver physical card"
                            },
                            "value": "Failed to deliver physical card",
                            "visibleIf": "(({Ticket Type} = 'Complaints') and ({Category} = 'Cards')) and ({Sub Category} = 'Issuing Physical Card')"
                        },
                        {
                            "text": {
                                "ar": "فشل في تفعيل البطاقة الفعلية المستلمة",
                                "default": "Failed to activate received Physical card"
                            },
                            "value": "Failed to activate received Physical card",
                            "visibleIf": "(({Ticket Type} = 'Complaints') and ({Category} = 'Cards')) and ({Sub Category} = 'Issuing Physical Card')"
                        },
                        {
                            "text": {
                                "ar": "تم استلام بطاقة تالفة",
                                "default": "Received a Damaged card"
                            },
                            "value": "Received a Damaged card",
                            "visibleIf": "(({Ticket Type} = 'Complaints') and ({Category} = 'Cards')) and ({Sub Category} = 'Issuing Physical Card')"
                        },
                        {
                            "text": {
                                "ar": "الاسم في البطاقة خطا",
                                "default": "Incorrect cardholder name"
                            },
                            "value": "Incorrect cardholder name",
                            "visibleIf": "(({Ticket Type} = 'Complaints') and ({Category} = 'Cards')) and ({Sub Category} = 'Issuing Physical Card')"
                        },
                        {
                            "text": {
                                "ar": "تم استلام البطاقة بدون ال CVV او تاريخ الانتهاء",
                                "default": "Card received without CVV or Ex date"
                            },
                            "value": "Card received without CVV or Ex date",
                            "visibleIf": "(({Ticket Type} = 'Complaints') and ({Category} = 'Cards')) and ({Sub Category} = 'Issuing Physical Card')"
                        },
                        {
                            "text": {
                                "ar": "فشل في ايقاف او الغاء ايقاف البطاقات",
                                "default": "Failed to lock or unlock the card"
                            },
                            "value": "Failed to lock or unlock the card",
                            "visibleIf": "(({Ticket Type} = 'Complaints') and ({Category} = 'Cards')) and ({Sub Category} = 'Card Management')"
                        },
                        {
                            "text": {
                                "ar": "فشل في تغيير كلمة مرور البطاقة",
                                "default": "Failed to change card PIN"
                            },
                            "value": "Failed to change card PIN",
                            "visibleIf": "(({Ticket Type} = 'Complaints') and ({Category} = 'Cards')) and ({Sub Category} = 'Card Management')"
                        },
                        {
                            "text": {
                                "ar": "فشل تفعيل أو تعطيل مدفوعات الانترنت",
                                "default": "Failed to enable or disable online payment"
                            },
                            "value": "Failed to enable or disable online payment",
                            "visibleIf": "(({Ticket Type} = 'Complaints') and ({Category} = 'Cards')) and ({Sub Category} = 'Card Management')"
                        },
                        {
                            "text": {
                                "ar": "فشل تفعيل أو تعطيل سحب من الصرافات",
                                "default": "Failed to enable or disable ATM withdrawal"
                            },
                            "value": "Failed to enable or disable ATM withdrawal",
                            "visibleIf": "(({Ticket Type} = 'Complaints') and ({Category} = 'Cards')) and ({Sub Category} = 'Card Management')"
                        },
                        {
                            "text": {
                                "ar": " فشل تفعيل أو تعطيل مدفوعات التجوال ",
                                "default": "Failed to enable or disable abroad payment"
                            },
                            "value": "Failed to enable or disable abroad payment",
                            "visibleIf": "(({Ticket Type} = 'Complaints') and ({Category} = 'Cards')) and ({Sub Category} = 'Card Management')"
                        },
                        {
                            "text": {
                                "ar": " فشل تفعيل أو تعطيل مدفوعات التجوال ",
                                "default": "Failed to enable or disable NFC payment"
                            },
                            "value": "Failed to enable or disable NFC payment",
                            "visibleIf": "(({Ticket Type} = 'Complaints') and ({Category} = 'Cards')) and ({Sub Category} = 'Card Management')"
                        },
                        {
                            "text": {
                                "ar": "لا يمكن اضافة البطاقة الى ابل بي",
                                "default": "Unable to add card in Apple pay"
                            },
                            "value": "Unable to add card in Apple pay",
                            "visibleIf": "(({Ticket Type} = 'Complaints') and ({Category} = 'Cards')) and ({Sub Category} = 'Card Management')"
                        },
                        {
                            "text": {
                                "ar": "لم يتم استخدام الحساب لمدة ٦ اشهر",
                                "default": "Account not use for 6 months"
                            },
                            "value": "Account not use for 6 months",
                            "visibleIf": "(({Ticket Type} = 'Request') and ({Category} = 'Account')) and ({Sub Category} = 'Activate freeze account')"
                        },
                        {
                            "text": {
                                "ar": "KYC اعرف زبونك",
                                "default": "KYC"
                            },
                            "value": "KYC",
                            "visibleIf": "(({Ticket Type} = 'Request') and ({Category} = 'Account')) and ({Sub Category} = 'Activate freeze account')"
                        },
                        {
                            "text": {
                                "ar": "لم يتم استخدام الحساب لمدة سنة",
                                "default": "Account not use for more than 1 year"
                            },
                            "value": "Account not use for more than 1 year",
                            "visibleIf": "(({Ticket Type} = 'Request') and ({Category} = 'Account')) and ({Sub Category} = 'Activate freeze account')"
                        },
                        {
                            "text": {
                                "ar": "خروج نهائي",
                                "default": "Final Exit"
                            },
                            "value": "Final Exit",
                            "visibleIf": "(({Ticket Type} = 'Request') and ({Category} = 'Account')) and ({Sub Category} = 'Account clearance')"
                        },
                        {
                            "text": {
                                "ar": "تم ادخال رقم مرور خطا",
                                "default": "Wrong Passcode entered"
                            },
                            "value": "Wrong Passcode entered",
                            "visibleIf": "(({Ticket Type} = 'Request') and ({Category} = 'Account')) and ({Sub Category} = 'Unlock the account')"
                        },
                        {
                            "text": {
                                "ar": "تم ادخال رمز التحقق خطأ",
                                "default": "Wrong OTP entered"
                            },
                            "value": "Wrong OTP entered",
                            "visibleIf": "(({Ticket Type} = 'Request') and ({Category} = 'Account')) and ({Sub Category} = 'Unlock the account')"
                        },
                        {
                            "text": {
                                "ar": "إيقاف مؤقت للبطاقة",
                                "default": "Temporary Stop card"
                            },
                            "value": "Temporary Stop card",
                            "visibleIf": "(({Ticket Type} = 'Request') and ({Category} = 'Cards')) and ({Sub Category} = 'Stop card')"
                        },
                        {
                            "text": {
                                "ar": "إيقاف البطاقة بشكل دائم",
                                "default": "Permanently Stop card"
                            },
                            "value": "Permanently Stop card",
                            "visibleIf": "(({Ticket Type} = 'Request') and ({Category} = 'Cards')) and ({Sub Category} = 'Stop card')"
                        },
                        "ID doesn’t exist or doesn’t match date of birth",
                        "Mobile number doesn’t belong to the same ID",
                        "Focal screening - High Risk and blocked the customer",
                        {
                            "value": "Change Phone number",
                            "visibleIf": "{Ticket Type} = 'Complaints' and {Category} = 'Login & Registration' and {Sub Category} = 'Can’t Register'"
                        }
                    ],
                    "name": "Sub Sub Category",
                    "placeholder": {
                        "ar": "تصنيف فرعي فرعي",
                        "default": "Sub Sub Category..."
                    },
                    "title": {
                        "ar": "تصنيف فرعي فرعي",
                        "default": "Sub Sub Category"
                    },
                    "type": "dropdown",
                    "visibleIf": "{Ticket Type} anyof ['Complaints', 'Request'] and {Sub Category} <> 'Transactions Declined with available balance' and {Category} <> 'Fraud' and {Category} <> 'Claim and Dispute' and {Sub Category} <> 'Send card internationally' and {Sub Category} <> 'Change the cardholder name' and {Sub Category} <> 'Update customer ID expiry date' and {Sub Category} notempty and {Sub Category} <> 'Send card internationally'"
                },
                {
                    "name": "Customer old Number",
                    "placeholder": "+96655xxxxxxx",
                    "title": "Customer Old Number",
                    "type": "text",
                    "visibleIf": "{Sub Sub Category} = 'Change Phone number'"
                },
                {
                    "name": "Customer New Number",
                    "placeholder": "+96655xxxxxxxx",
                    "title": "Customer New Number",
                    "type": "text",
                    "visibleIf": "{Sub Sub Category} = 'Change Phone number'"
                },
                {
                    "choices": [
                        "Yes, Registered under customer ID",
                        "No, Not under customer ID"
                    ],
                    "name": "Is the number register under your ID",
                    "title": "Is the number register under your ID",
                    "type": "dropdown",
                    "visibleIf": "{Sub Sub Category} = 'Change Phone number'"
                },
                {
                    "inputType": "number",
                    "name": "Enter Customer ID",
                    "title": "Enter Customer ID",
                    "type": "text",
                    "visibleIf": "{Sub Sub Category} = 'Change Phone number'"
                },
                {
                    "name": "Reference Number",
                    "placeholder": {
                        "ar": "مصدر العملية",
                        "default": "Transaction Source..."
                    },
                    "title": {
                        "ar": "رقم المرجع",
                        "default": "Reference No."
                    },
                    "type": "text",
                    "visibleIf": "(({Ticket Type} = 'Request') and ({Category} = 'Claim and Dispute')) and ({Sub Category} anyof ['Wrong Amount Deduction', 'Duplicated Deduction', 'Declined but Deducted', 'Deducted but item not Received', 'Refund not Received from Merchant', 'Unauthorized payment', 'Transferred to a wrong account', 'ATM did not dispense', 'ATM Reversal amount not received', 'ATM Partial Dispense', 'Delay or failed to reflect transaction', 'Dispute on Exchange rate', 'Dispute on transfer fees'])"
                },
                {
                    "elements": [
                        {
                            "allowClear": false,
                            "choices": [
                                {
                                    "text": "Mada",
                                    "value": "Item 1"
                                },
                                {
                                    "text": "GCC",
                                    "value": "Item 2"
                                },
                                {
                                    "text": "Mastercard",
                                    "value": "Item 3"
                                }
                            ],
                            "name": "Payment Network",
                            "title": "Select the payment network",
                            "type": "dropdown"
                        },
                        {
                            "allowClear": false,
                            "choices": [
                                {
                                    "text": {
                                        "ar": "نعم موافق",
                                        "default": "Yes I agree"
                                    },
                                    "value": "Yes I Agree"
                                },
                                {
                                    "text": {
                                        "ar": "لا غير موافق",
                                        "default": "No I don't agree"
                                    },
                                    "value": "No I don't Agree"
                                }
                            ],
                            "name": "Claims fees agreement",
                            "title": {
                                "ar": "سيتم تطبيق رسوم بقيمة 75.00 ريال سعودي في حالة كان الاعتراض خاطئ ، هل توافق؟",
                                "default": "Fees of 50 SAR will apply in case of a wrong dispute, Do you agree?"
                            },
                            "type": "dropdown",
                            "visibleIf": "{Payment Network} = 'Item 3'"
                        },
                        {
                            "allowClear": false,
                            "choices": [
                                {
                                    "text": {
                                        "ar": "رسائل نصية",
                                        "default": "SMS Message"
                                    },
                                    "value": "SMS Message"
                                },
                                {
                                    "text": {
                                        "ar": "بريد الالكتروني email",
                                        "default": "Email"
                                    },
                                    "value": "Email"
                                },
                                {
                                    "text": {
                                        "ar": "كشف حساب",
                                        "default": "Account Statement"
                                    },
                                    "value": "Account Statement"
                                },
                                {
                                    "text": {
                                        "ar": "اخرى",
                                        "default": "Others (specify)"
                                    },
                                    "value": "Others (specify)"
                                }
                            ],
                            "name": "knowing about the disputed",
                            "title": {
                                "ar": "كيف عرفت بالعملية المعترض عليها؟",
                                "default": "How did you come to know about the disputed transactions?"
                            },
                            "type": "dropdown"
                        },
                        {
                            "name": "Describe knowing about the disputed",
                            "title": {
                                "ar": "اشرح كيف عرفة بالخصم الخاص بالعملية المعترض عليها؟",
                                "default": "Describe how did you know about the disputed transaction?"
                            },
                            "type": "comment",
                            "visibleIf": "{knowing about the disputed} = 'Others (specify)'"
                        },
                        {
                            "allowClear": false,
                            "choices": [
                                {
                                    "text": {
                                        "ar": "نعم",
                                        "default": "Yes"
                                    },
                                    "value": "Yes"
                                },
                                {
                                    "text": {
                                        "ar": "لا",
                                        "default": "No"
                                    },
                                    "value": "No"
                                }
                            ],
                            "name": "Calls/Email/SMS before the disputed",
                            "title": {
                                "ar": "هل تلقيت أي مكالمات / بريد إلكتروني / رسالة نصية قبل وقت العملية المعترض عليها وتتعلق بنفس العملية؟",
                                "default": "Have you received any calls/Email/SMS before the disputed transaction and related to the same transaction?"
                            },
                            "type": "dropdown"
                        },
                        {
                            "name": "request contact details",
                            "title": {
                                "ar": "ادخل رقم الجوال او الايميل اللي تم التواصل معاك منه ؟",
                                "default": "Enter the Phone Number or Email ID from which the request reached you:"
                            },
                            "type": "comment",
                            "visibleIf": "{Calls/Email/SMS before the disputed} = 'Yes'"
                        },
                        {
                            "allowClear": false,
                            "choices": [
                                {
                                    "text": {
                                        "ar": "نعم",
                                        "default": "Yes"
                                    },
                                    "value": "Yes"
                                },
                                {
                                    "text": {
                                        "ar": "لا",
                                        "default": "No"
                                    },
                                    "value": "No"
                                }
                            ],
                            "name": "Have You Shared Sensitive Credentials",
                            "title": {
                                "ar": "هل قمت بمشاركة أي بيانات اعتماد مثل تفاصيل البطاقة، او اسم المستخدم، كلمة المرور، كلمة المرور لجهاز الصراف الآلي، رمز التحقق، او تفاصيل الحساب مع مقدم الطلب؟",
                                "default": "Have You Shared Sensitive details such as:\nCard details, user ID, password, ATM PIN, OTP, or account info with the requester?"
                            },
                            "type": "dropdown"
                        },
                        {
                            "choices": [
                                {
                                    "text": {
                                        "ar": "بيانات البطاقة",
                                        "default": "Card details"
                                    },
                                    "value": "Card details"
                                },
                                {
                                    "text": {
                                        "ar": "اسم المستخدم للحساب",
                                        "default": "Account User ID"
                                    },
                                    "value": "Account User ID"
                                },
                                {
                                    "text": {
                                        "ar": "رمز الحساب",
                                        "default": "Account Password"
                                    },
                                    "value": "Account Password"
                                },
                                {
                                    "text": {
                                        "ar": "كلمة مرور البطاقة",
                                        "default": "ATM PIN"
                                    },
                                    "value": "ATM Pin"
                                },
                                {
                                    "text": {
                                        "ar": "رمز التحقق",
                                        "default": "OTP"
                                    },
                                    "value": "OTP"
                                },
                                {
                                    "text": {
                                        "ar": "بيانات الحساب",
                                        "default": "Account details"
                                    },
                                    "value": "Account details"
                                }
                            ],
                            "name": "What was shared",
                            "showSelectAllItem": true,
                            "title": {
                                "ar": "تحديد ما تم مشاركته؟ حدد كل ما ينطبق؟",
                                "default": "Specify what was shared. Select all that apply."
                            },
                            "type": "checkbox",
                            "visibleIf": "{Have You Shared Sensitive Credentials} = 'Yes'"
                        },
                        {
                            "choices": [
                                {
                                    "text": {
                                        "ar": "بالايميل",
                                        "default": "By Email"
                                    },
                                    "value": "By Email"
                                },
                                {
                                    "text": {
                                        "ar": "عبر مكالمة",
                                        "default": "By Phone"
                                    },
                                    "value": "By Phone"
                                },
                                {
                                    "text": {
                                        "ar": "اعادة ارسال الرسالة",
                                        "default": "SMS forwarded"
                                    },
                                    "value": "SMS forwarded"
                                },
                                {
                                    "text": {
                                        "ar": "تم ادخال البيانات في تطبيق",
                                        "default": "Entered in app"
                                    },
                                    "value": "Entered in App"
                                },
                                {
                                    "text": {
                                        "ar": "تم ادخال البيانات في رابط",
                                        "default": "Entered in a link"
                                    },
                                    "value": "Entered in a link"
                                }
                            ],
                            "name": "Sharing Methods",
                            "showSelectAllItem": true,
                            "title": {
                                "ar": "كيف قمت بمشاركة التفاصيل؟",
                                "default": "How did you share the details with the requester?"
                            },
                            "type": "checkbox",
                            "visibleIf": "{Have You Shared Sensitive Credentials} = 'Yes'"
                        },
                        {
                            "name": "Specify how it was shared?",
                            "title": {
                                "ar": "حدد كيف تم مشاركتها؟",
                                "default": "Specify how it was shared?"
                            },
                            "type": "comment",
                            "visibleIf": "{Have You Shared Sensitive Credentials} = 'Yes'"
                        },
                        {
                            "allowClear": false,
                            "choices": [
                                {
                                    "text": {
                                        "ar": "فعاله",
                                        "default": "Active"
                                    },
                                    "value": "Active"
                                },
                                {
                                    "text": {
                                        "ar": "غير فعالة",
                                        "default": "Inactive"
                                    },
                                    "value": "Inactive"
                                }
                            ],
                            "name": "SIM Card Status",
                            "placeholder": "Active / Inactive",
                            "title": {
                                "ar": "حالة شريحة الجوال أثناء وقت تنفيذ العملية المعترض عليها؟",
                                "default": "What Was the SIM Card Status at the Time?"
                            },
                            "type": "dropdown"
                        },
                        {
                            "allowClear": false,
                            "choices": [
                                {
                                    "text": {
                                        "ar": "نعم",
                                        "default": "Yes"
                                    },
                                    "value": "Yes"
                                },
                                {
                                    "text": {
                                        "ar": "لا",
                                        "default": "No"
                                    },
                                    "value": "No"
                                }
                            ],
                            "name": "Card Presence During the Transaction",
                            "placeholder": "Yes / No",
                            "title": {
                                "ar": "هل كنت البطاقة بحوزتك اثناء الخصم الغير مصرح به؟",
                                "default": "Was your Tweeq card with you when the Unauthorized Transaction Happened?"
                            },
                            "type": "dropdown"
                        }
                    ],
                    "name": "Unauthorized payment",
                    "title": {
                        "ar": "دفعة غير مصرحة",
                        "default": "Unauthorized payment"
                    },
                    "type": "panel",
                    "visibleIf": "{Sub Category} = 'Unauthorized payment'"
                },
                {
                    "inputType": "date",
                    "name": "Expiry date",
                    "title": {
                        "ar": "تاريخ الانتهاء الجديد",
                        "default": "New Expiry date"
                    },
                    "type": "text",
                    "visibleIf": "(({Ticket Type} = 'Request') and ({Category} = 'Customer information')) and ({Sub Category} = 'Update customer ID expiry date')"
                },
                {
                    "allowClear": false,
                    "choices": [
                        "Yes",
                        "No"
                    ],
                    "name": "Sama Ticket",
                    "placeholder": "Yes/No",
                    "title": "Is there a ticket raised to SAMA Care ",
                    "type": "dropdown"
                },
                {
                    "description": "Enter Sama ticket ID",
                    "name": "Sama Ticket ID",
                    "placeholder": "Enter Sama ticket ID",
                    "title": "Sama Ticket ID",
                    "type": "text",
                    "visibleIf": "{Sama Ticket} = 'Yes'"
                }
            ],
            "name": "page1"
        }
    ],
    "showNavigationButtons": "none",
    "showPageTitles": false,
    "showTitle": false,
    "title": {
        "ar": "نموذج التذكرة"
    },
    "widthMode": "responsive"
}



let ticketType, category, subCategory;

if (ticketType === "Complaints") {
    if (category === "Waiting List") {
        if (subCategory === "Can't register in waiting list OTP not received") {

        } else if (subCategory === "Can't reserve Tweeq Tag in waiting list") {

        } else if (subCategory === "My ranking is not moving") {

        }
    } else if (category === "Can't Register") {
        if (subCategory === "General error - something went wrong") {

        } else if (subCategory === "Invalid ID or wrong date of birth.") {

        } else if (subCategory === "Registration OTP not received") {

        } else if (subCategory === "Mobile already registered & customer confrim its new number under his ID") {

        } else if (subCategory === "Pending screening") {

        } else if (subCategory === "Screening rejected") {

        } else if (subCategory === "Nafath not accepting") {

        } else if (subCategory === "Yaqeen Nationality error code") {

        } else if (subCategory === "Mobile is not register under your ID") {

        }
    } else if (category === "Can't Login") {

    } else if (category === "Virtual card") {

    } else if (category === "Physical card") {

    } else if (category === "Cards Management") {

    } else if (category === "Passcode issues") {

    } else if (category === "Locked account") {

    } else if (category === "Sent Transfer from Tweeq (P2P)") {

    } else if (category === "Receive Transfer from Tweeq (P2P)") {

    } else if (category === "Online Payments") {

    } else if (category === "ATM Withdrawal") {

    } else if (category === "POS Payment") {

    } else if (category === "Add Money to Tweeq Account") {

    }
} else if (ticketType === "Claim and Dispute") {

} else if (ticketType === "Fraud") {

} else if (ticketType === "Request") {

} else if (ticketType === "Inquiry") {

} else if (ticketType === "Suggestions") {

}