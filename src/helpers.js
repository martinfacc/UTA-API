export const filterByIdOrName = (array, args) => {
	const { id, name } = args
	if (id) return array.find(element => element.id === id)
	if (name) return array.filter(element => element.name.toLowerCase().includes(name.toLowerCase()))
	return array
}