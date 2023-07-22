import { isOs } from '../utilies/Device'

export default {
    h1: isOs() ? 26 : 24,
    h2: isOs() ? 24 : 22,
    h3: isOs() ? 22 : 20,
    h4: isOs() ? 20 : 18,
    h5: isOs() ? 18 : 16,
    h6: isOs() ? 16 : 14,
}