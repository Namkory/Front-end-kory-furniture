import { faCircleDollarToSlot, faClipboardList, faMoneyBillTrendUp } from '@fortawesome/free-solid-svg-icons';

export const CardsData = [
    {
        title: 'Sales',
        color: {
            backGround: 'linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)',
            boxShadow: '0px 10px 20px 0px #e0c6f5',
        },
        barValue: 70,
        value: '25,970',
        png: faCircleDollarToSlot,
    },
    {
        title: 'Revenue',
        color: {
            backGround: 'linear-gradient(180deg, #FF919D 0%, #FC929D 100%)',
            boxShadow: '0px 10px 20px 0px #FDC0C7',
        },
        barValue: 80,
        value: '14,270',
        png: faMoneyBillTrendUp,
    },
    {
        title: 'Expenses',
        color: {
            backGround: 'linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255, 202, 113) -46.42%)',
            boxShadow: '0px 10px 20px 0px #F9D59B',
        },
        barValue: 60,
        value: '4,270',
        png: faClipboardList,
    },
];
