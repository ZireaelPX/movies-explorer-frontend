const allMovies = [
    {
        id: 1,
        title: 'Moon',
        duration: '2ч 42м',
        image: 'https://images.unsplash.com/photo-1650220080385-4fe734999c71?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170',
    },
    {
        id: 2,
        title: 'Moon 2',
        duration: '2ч 42м',
        image: 'https://images.unsplash.com/photo-1650220080385-4fe734999c71?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170',
    },
    {
        id: 3,
        title: 'Земля',
        duration: '2ч 42м',
        image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472',
    },
    {
        id: 4,
        title: 'Moon 3',
        duration: '2ч 42м',
        image: 'https://images.unsplash.com/photo-1650220080385-4fe734999c71?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170',
    },
    {
        id: 5,
        title: 'Земля 2',
        duration: '2ч 42м',
        image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472',
    },
    {
        id: 6,
        title: 'Земля 3',
        duration: '2ч 42м',
        image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472',
    },
    {
        id: 7,
        title: 'Галактика',
        duration: '2ч 42м',
        image: 'https://images.unsplash.com/photo-1543722530-d2c3201371e7?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474',
    },
    {
        id: 8,
        title: 'Земля',
        duration: '2ч 42м',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472',
    },
    {
        id: 9,
        title: 'Земля 4',
        duration: '2ч 42м',
        image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472',
    },
    {
        id: 10,
        title: 'Земля с МКС',
        duration: '2ч 42м',
        image: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472',
    },
    {
        id: 11,
        title: 'Земля с МКС 2',
        duration: '2ч 42м',
        image: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472',
    },
    {
        id: 12,
        title: 'Земля с МКС 3',
        duration: '2ч 42м',
        image: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472',
    },
    {
        id: 13,
        title: 'Земля 4',
        duration: '2ч 42м',
        image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472',
    },
    {
        id: 14,
        title: 'Земля с МКС 4',
        duration: '2ч 42м',
        image: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472',
    },
    {
        id: 15,
        title: 'Земля с МКС 5',
        duration: '2ч 42м',
        image: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472',
    },
    {
        id: 16,
        title: 'Земля с МКС 6',
        duration: '2ч 42м',
        image: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472',
    },
];

export default allMovies;
