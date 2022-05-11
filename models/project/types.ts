import { gql } from 'apollo-server-express';

const projectTypes = gql`
  type Objetivo {
    descripcion: String!
    tipo: Enum_TipoObjetivo!
  }

  input inputObjetivo {
    descripcion: String!
    tipo: String!
  }

  type Proyecto {
    _id: ID!
    nombre: String!
    presupuesto: Float!
    fechaInicio: Date!
    fechaFin: Date!
    estado: Enum_EstadoProyecto
    fase: Enum_FaseProyecto
    lider: Usuario!
    objetivos: [Objetivo]
  }

  type Query {
    Proyectos: [Proyecto]
  }

  type Mutation {
    crearProyecto(
      nombre: String!
      presupuesto: Float!
      fechaInicio: Date!
      fechaFin: Date!
      estado: Enum_EstadoProyecto!
      fase: Enum_FaseProyecto!
      lider: ID!
      objetivos: [inputObjetivo]
    ): Proyecto
  }
`;

export { projectTypes };