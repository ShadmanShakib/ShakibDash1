interface OneDay {
  market_cap_change: string;
  market_cap_change_pct: string;
  price_change: string;
  price_change_pct: string;
  volume: string;
  volume_change: string;
  volume_change_pct: string;
}
export interface CurrencyDataType {
  "1d": OneDay;
  circulating_supply: string;
  currency: string;
  first_candle: string;
  first_order_book: string;
  first_trade: string;
  high: string;
  high_timestamp: string;
  id: string;
  logo_url: string;
  market_cap: string;
  market_cap_dominance: string;
  max_supply: string;
  name: string;
  num_exchanges: string;
  num_pairs: string;
  num_pairs_unmapped: string;
  price: string;
  price_date: string;
  price_timestamp: string;
  rank: string;
  rank_delta: string;
  status: string;
  symbol: string;
}
