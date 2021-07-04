import PaymentIcon from '@material-ui/icons/Payment';
import StorageIcon from '@material-ui/icons/Storage';
import CastConnectedIcon from '@material-ui/icons/CastConnected';
import SettingsInputHdmiIcon from '@material-ui/icons/SettingsInputHdmi';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import HelpIcon from '@material-ui/icons/Help';
import ReceiptIcon from '@material-ui/icons/Receipt';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

export const elements = [
    {
        id: 1,
        name: 'Products',
        items: [
            {
                Itemname: 'Payment',
                id: 1,
                icon: <PaymentIcon />,
            },
            {
                Itemname: 'Terminal',
                id: 2,
                icon: <StorageIcon />,
            },
            {
                Itemname: 'Connect',
                id: 3,
                icon: <CastConnectedIcon />,
            },
        ],
    },
    {
        id: 2,
        name: 'Developers',
        items: [
            {
                Itemname: 'Plugins',
                id: 1,
                icon: <SettingsInputHdmiIcon />,
            },
            {
                Itemname: 'Libraries',
                id: 2,
                icon: <LibraryBooksIcon />,
            },
            {
                Itemname: 'Help',
                id: 3,
                icon: <HelpIcon />,
            },
            {
                Itemname: 'Billing',
                id: 4,
                icon: <ReceiptIcon />,
            },
        ],
    },
    {
        id: 3,
        name: 'Company',
        items: [
            {
                Itemname: 'About',
                id: 1,
                icon: <BusinessCenterIcon />,
            },
            {
                Itemname: 'Customers',
                id: 2,
                icon: <PeopleAltIcon />,
            },
        ],
    },
];
