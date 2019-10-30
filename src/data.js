export const columns =  [
        {
          text: 'Наименование',
          align: 'left',          
          value: 'name',
          width: "30%"
        },
        { text: 'Адрес', value: 'address', width: "25%"},
        { text: 'ОГРН', value: 'psrn', width: "15%" },
        { text: 'ИНН', value: 'itn', width: "15%" },
        { text: 'Дата регестрации', value: 'date', width: "15%" },
        { text: 'Удалить', value: 'action', sortable: false , width: "10%"}
      ]

export const rows =  [
    {
      name: 'Google',
      address: 'г.Москва, ул.Балчуг, д.7',
      psrn: '0000000000001',
      itn: '7704582421',
      date: '2012-12-12',      
    },
    {
      name: 'Yandex',
      address: 'Москва, ул. Льва Толстого, 16',
      psrn: '0000000000002',
      itn: '7736207543',
      date: '2013-10-3',  
    },
    {
      name: 'Microsoft',
      address: 'г.Москва',
      psrn: '0000000000003',
      itn: '7774352898',
      date: '2000-5-5',      
    },
    {
      name: 'Одноглассники',
      address: 'г.Санкт-Петербург',
      psrn: '0000000000004',
      itn: '7842349892',
      date: '2000-5-15', 
    },
    {
      name: 'Asus',
      address: 'г.Санкт-Петербург',
      psrn: '0000000000005',
      itn: '9909396331',
      date: '2010-7-15', 
    },
    {
      name: 'Avast',
      address: 'г.Москва',
      psrn: '0000000000006',
      itn: '97713140469',
      date: '2010-7-15', 
    }

  ]