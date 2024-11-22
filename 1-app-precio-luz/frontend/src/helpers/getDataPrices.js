//traer la data de los precios de la luz

const url=import.meta.env.VITE_URL

export const getDataPrices = async () =>{
    try {
        const response = await fetch(url);

        if (!response.ok) throw new Error("Error al traer el data");

        const data = await response.json();

        return data;

    } catch (error) {
        console.log(error);
    }
}