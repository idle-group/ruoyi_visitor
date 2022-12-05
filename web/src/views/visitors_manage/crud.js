import { request } from "@/api/service";
import { BUTTON_STATUS_NUMBER } from "@/config/button";
import { urlPrefix as bookPrefix } from "./api";


export const crudOptions = vm => {
    return {
        pageOptions: {
            compact: true
        },
        options: {
            tableType: "vxe-table",
            rowKey: true, // 必须设置，true or false
            rowId: "id",
            height: "100%", // 表格高度100%, 使用toolbar必须设置
            highlightCurrentRow: false
        },
        rowHandle: {
            width: 140,
            view: {
                thin: true,
                text: "",
                disabled() {
                    return !vm.hasPermissions("Retrieve");
                }
            },
            edit: {
                thin: true,
                text: "",
                disabled() {
                    return !vm.hasPermissions("Update");
                }
            },
            remove: {
                thin: true,
                text: "",
                disabled() {
                    return !vm.hasPermissions("Delete");
                }
            }
        },
        indexRow: {
            // 或者直接传true,不显示title，不居中
            title: "序号",
            align: "center",
            width: 100
        },
        viewOptions: {
            componentType: "form"
        },
        formOptions: {
            defaultSpan: 24, // 默认的表单 span
            width: "35%"
        },
        columns: [{
            title: "ID",
            key: "id",
            show: false,
            disabled: true,
            width: 90,
            form: {
                disabled: true
            }
        },
        {
            title: "访客姓名",
            key: "name",
            sortable: true,
            treeNode: true,
            type: "input",
            search: {
                component: {
                    props: {
                        clearable: true
                    }
                }
            },
            form: {
                editDisabled: true,
                rules: [
                    // 表单校验规则
                    { required: true, message: "访客姓名必填" }
                ],
                component: {
                    props: {
                        clearable: true
                    },
                    placeholder: "请输入访客姓名"
                },
                itemProps: {
                    class: { yxtInput: true }
                }
            }
        },
        {
            title: "预约到访时间",
            key: "start_time",
            sortable: true,
            type: "datetime",
            form: {
                editDisabled: true,
                rules: [
                    // 表单校验规则
                    { required: true, message: "预约到访时间" }
                ],
                component: {
                    props: {
                        clearable: true
                    },
                    placeholder: "请输入预约到访时间"
                },
                itemProps: {
                    class: { yxtInput: true }
                }
            }
        },
        {
            title: '到访单位',
            key: 'dep',
            search: {
                disabled: true
            },
            minWidth: 140,
            type: 'tree-selector',
            dict: {
                cache: true,
                isTree: true,
                url: '/api/system/dept/all_dept/',
                value: 'id', // 数据字典中value字段的属性名
                label: 'name' // 数据字典中label字段的属性名
            },
            form: {
                rules: [ // 表单校验规则
                    {
                        required: true,
                        message: '必填项'
                    }
                ],
                itemProps: {
                    class: { yxtInput: true }
                },
                component: {
                    span: 12,
                    pagination: true,
                    props: { multiple: false }
                }
            },
        },
        {
            title: "预约结束时间",
            key: "end_time",
            sortable: true,
            type: "datetime",
            form: {
                editDisabled: true,
                rules: [
                    { required: true, message: "预约结束时间必填" }
                ],
                component: {
                    props: {
                        clearable: true,
                    },
                    placeholder: "请输入预约结束时间"
                },
                itemProps: {
                    class: { yxtInput: true }
                }
            }
        },
        {
            title: "是否已经离开",
            key: "is_leave",
            sortable: false,
            type: "select",
            form: {
                editDisabled: false,
                addDisabled: true
            },
            dict: {
                data: [
                    { value: 'true', label: '是' },
                    { value: 'false', label: '否' }
                ]
            }
        }
        ].concat(vm.commonEndColumns())

    };
};



