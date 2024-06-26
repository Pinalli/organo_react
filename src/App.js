import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';


function App() {

  const teams = [
    {
      name: 'Programação',
      primaryColor: "57C278",
      secundaryColor: "D9F7E9"

    },
    {
      name: 'Front-End',
      primaryColor: "82CFFA",
      secundaryColor: "E8F8FF"

    },
    {
      name: 'Data Science',
      primaryColor: "A6D157",
      secundaryColor: "F0F8E2"

    },
    {
      name: 'Devops',
      primaryColor: "E06B69",
      secundaryColor: "FDE7E8"

    },
    {
      name: 'UX e Design',
      primaryColor: "DB6EBF",
      secundaryColor: "FAE9F5"

    },
    {
      name: 'Mobile',
      primaryColor: "FFBA05",
      secundaryColor: "FFFSD9"

    },
    {
      name: 'Inovação e Gestão',
      primaryColor: "FF8A29",
      secundaryColor: "FFEEDF"

    }
  ]

  const [collaborators, setCollaborators] = useState([]);

  const whenNewCollaboratorRegistered = (collaborator) => {
    console.log('Novo colaborador registrado => ', collaborator);
    setCollaborators([...collaborators, collaborator]);
  }

  return (
    <div className="App">
      <Banner />
      <Form teams={teams.map(team => team.name)} whenCollaboratorsRegistered={collaborator => whenNewCollaboratorRegistered(collaborator)} />
      {teams.map(team => <Team key={team.name} name={team.name} primaryColor={team.primaryColor} secundaryColor={team.secundaryColor}/>)}     
    </div>
  );
}

export default App;
