import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Product',
    
    icon: <FaIcons.FaBars />,
    // icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Category',
        path: '/category',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Parents',
        path: '/parentlist',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Product List',
        path: '/product',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Add Product',
        path: '/addproduct/id',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Print Bar Code',
        path: '/print_barcode',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Adjustment List',
        path: '/adjustment',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Add Adjustment',
        path: '/overview/revenue',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Stock Count',
        path: '/overview/revenue',
        icon: <IoIcons.IoIosPaper />
      },
    ]
  },
  {
    title: 'Purchase',
    path: '/reports',
    icon: <AiIcons.AiFillCreditCard/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Purchase List',
        path: '/reports/reports1',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Add Purchase',
        path: '/reports/reports2',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Import Purchase By CSV',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Sales',
    path: '/reports',
    icon: <FaIcons.FaCartPlus />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Sale List',
        path: '/reports/reports1',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'POS',
        path: '/reports/reports2',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Add Sale',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Import Sale By CSV',
        path: '/salebycsv',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Git Card List',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Coupon List',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Delivery List',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosPaper />
      },
    ]
  },
  {
    title: 'Expense',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Expense Category',
        path: '/reports/reports1',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Expense List',
        path: '/reports/reports2',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Add Expense',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosPaper />
      },
     
    ]
  },
  {
    title: 'Quotation',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Quotation List',
        path: '/reports/reports1',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      
      {
        title: 'Add Quotation',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosPaper />
      },
      
    ]
  },
  {
    title: 'Transfer',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Transfer List',
        path: '/reports/reports1',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      
      {
        title: 'Add Transfer',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosPaper />
      },
      
    ]
  },
  {
    title: 'Return',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Sales',
        path: '/reports/reports1',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      
      {
        title: 'Purchase',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosPaper />
      },
      
    ]
  },
  {
    title: 'Accounts',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Account List',
        path: '/reports/reports1',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      
      {
        title: 'Add Account',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Money Transfer',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Balance Sheet',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Account Statement',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosPaper />
      },
    ]
  },
  {
    title: 'HRM',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Department',
        path: '/reports/reports1',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      
      {
        title: 'Employee',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Attendance',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Payroll',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Holiday',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosPaper />
      },
    ]
  },
  {
    title: 'People',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'User List',
        path: '/reports/reports1',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      
      {
        title: 'Add User',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Customer List',
        path: '/customer',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Add Customer',
        path: '/customer',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Biller List',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Add Biller',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Supplier List',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Add Supplier',
        path: '/supplier',
        icon: <IoIcons.IoIosPaper />
      },
    ]
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Summary Report',
        path: '/reports/reports1',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      
      {
        title: 'Best Seller',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Product Report',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Daily Sale',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Monthly Sale',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Daily Purchase',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Monthly Purchase',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Sale Report',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Payment Report',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Purchase Report',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Warehouse Report',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Warehouse Stock Chart',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Product Quantity Alert',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'User Report',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Customer Report',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Supplier Report',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Due Report',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosPaper />
      },
    ]
  },
  {
    title: 'Return',
    path: '/products',
    icon: <FaIcons.FaCartPlus />
  },
  {
    title: 'Sales',
    path: '/team',
    icon: <IoIcons.IoMdPeople />
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Message 1',
        path: '/messages/message1',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Message 2',
        path: '/messages/message2',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />
  }
];