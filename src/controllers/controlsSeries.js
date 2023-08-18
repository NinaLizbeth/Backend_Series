import { readSeries } from '../../utils/fsFuntion.js'
import{series} from '../models/Series.js'




export const createSerie = async( id, name, genero, estreno, temporada, autor) =>{
    const serie = new series( id, name, genero, estreno, temporada, autor )
    const series = await readSeries()
    series.push(serie)

    
}

export const getSeries = async (req, res) =>{
    const seriesParaElFront = await readSeries() 
    res.status(200).json(seriesParaElFront)
    }