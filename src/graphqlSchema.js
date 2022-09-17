import { makeExecutableSchema } from '@graphql-tools/schema'
import provinces from './data/provinces.js'
import departments from './data/departments.js'
import municipalities from './data/municipalities.js'
import localities from './data/localities.js'
import { filterByIdOrName } from './helpers.js'

const typeDefs = `#graphql
	type Province {
		id: ID!
		name: String!
		departments: [Department]
	}
	
	type Department {
		id: ID!
		name: String!
		provinceId: ID!
		province: Province
		municipalities: [Municipality]
	}

	type Municipality {
		id: ID!
		name: String!
		departmentId: ID!
		department: Department
		localities: [Locality]
	}

	type Locality {
		id: ID!
		name: String!
		uta2020: String
		uta2010: String
		latitude: Float!
		longitude: Float!
		municipalityId: ID!
		municipality: Municipality
	}

	type Query {
		provincesCount: Int!
		departmentsCount: Int!
		municipalitiesCount: Int!
		localitiesCount: Int!

		provinces(name: String): [Province]
		departments(name: String): [Department]
		municipalities(name: String): [Municipality]
		localities(name: String): [Locality]

		province(id: Int!): Province
		department(id: Int!): Department
		municipality(id: Int!): Municipality
		locality(id: Int!): Locality
	}
`

const resolvers = {
	Query: {
		provincesCount: () => provinces.length,
		departmentsCount: () => departments.length,
		municipalitiesCount: () => municipalities.length,
		localitiesCount: () => localities.length,

		province: (parent, args) => filterByIdOrName(provinces, args),
		department: (parent, args) => filterByIdOrName(departments, args),
		municipality: (parent, args) => filterByIdOrName(municipalities, args),
		locality: (parent, args) => filterByIdOrName(localities, args),

		provinces: (parent, args) => filterByIdOrName(provinces, args),
		departments: (parent, args) => filterByIdOrName(departments, args),
		municipalities: (parent, args) => filterByIdOrName(municipalities, args),
		localities: (parent, args) => filterByIdOrName(localities, args),
	},

	Province: {
		departments: (parent) =>
			departments.filter((department) => department.provinceId === parent.id),
	},

	Department: {
		province: (parent) =>
			provinces.find((province) => province.id === parent.provinceId),
		municipalities: (parent) =>
			municipalities.filter(
				(municipality) => municipality.departmentId === parent.id
			),
	},

	Municipality: {
		department: (parent) =>
			departments.find((department) => department.id === parent.departmentId),
		localities: (parent) =>
			localities.filter((locality) => locality.municipalityId === parent.id),
	},

	Locality: {
		municipality: (parent) =>
			municipalities.find(
				(municipality) => municipality.id === parent.municipalityId
			),
	},
}

export default makeExecutableSchema({
	typeDefs,
	resolvers,
})
