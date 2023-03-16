import React, { useState } from 'react';
import Link from 'next/link';
import { Container,TextInput,Button,Text, Input,Group } from '@mantine/core';
import Demo from './card';

function TableData() {
  const [keyword, setKeyword] = useState('');
  let rawData = [
{
    name: "John Doe",
    age: 32,
    occupation: "Developer"
    },
    {
    name: "Jane Doe",
    age: 27,
    occupation: "Designer"
    },
    {
    name: "Bob Smith",
    age: 45,
    occupation: "Manager"
    }
]

  const mappedData = rawData.map(i => {
    return {
      ...i,
      companyName: 'Google'
    }
  });
 
  let list = rawData;
  if (keyword.length > 0) {
    rawData = rawData.filter(i => i.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1);
  }

  var temp=[ ]
  list=rawData.filter((item) => {
if(!temp.includes(item.name + item.age)){
  temp.push(item.name + item.age)
  return true;
}
})


  const filtered = rawData.filter((name, index) =>  rawData.indexOf(name) === index  )
  console.log(filtered)

  return (
    <Container size='sm'>
    <div style={{ margin: 'auto', width: '50%', marginTop: '4rem' }}>
      <div style={{ marginBottom: 16, textAlign: 'left' }}>
        <Text size={24} weight='bold' py='lg'>You are viewing
filtered results.</Text>
        <Input type="text" value={keyword} onChange={e => setKeyword(e.target.value)} placeholder="search by name" />
    
      </div>
      <div>
        <table style={{ width: '100%' }} border={true}>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Age</th>
              <th>Occupation</th>
            </tr>
          </thead>
          <tbody>
            {
              list.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td >{item.occupation}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
    <Group position='center' mt={60}>
<Link href='./card'>
    <Button>Click me to get data in card</Button>
    </Link>
    </Group>
    </Container>
  );
}

export default TableData;