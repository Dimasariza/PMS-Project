<?php

namespace App\DTO\Ship;

use App\Http\Requests\Ship\UpdateShipRequest;

class UpdateShipDTO
{
    public function __construct(
        public readonly string $imoNumber,
        public readonly string $vesselName,
        public readonly string $flag,
        public readonly ?string $picture,
        public readonly int $dwt,
        public readonly int $grossTonage,
        public readonly ?int $year,
        public readonly string $callsign,
        public readonly float $loa,
        public readonly float $breadth,
        public readonly string $vesselTypeGeneric,
        public readonly string $vesselTypeDetailed,
    ) {}

    public static function fromRequest(UpdateShipRequest $request, string $picture = null): self
    {
        return new self(
            imoNumber: $request->validated('imoNumber'),
            vesselName: $request->validated('vesselName'),
            flag: $request->validated('flag'),
            picture: $picture,
            dwt: $request->validated('dwt'),
            grossTonage: $request->validated('grossTonage'),
            year: $request->validated('year') ?? null,
            callsign: $request->validated('callsign'),
            loa: $request->validated('LOA'),
            breadth: $request->validated('breadth'),
            vesselTypeGeneric: $request->validated('vesselTypeGeneric'),
            vesselTypeDetailed: $request->validated('vesselTypeDetailed')
        );
    }

    public function build(): array
    {
        $arr = [
            'imo_number' => $this->imoNumber,
            'vessel_name' => $this->vesselName,
            'flag' => $this->flag,
            'picture' => $this->picture,
            'dwt' => $this->dwt,
            'gross_tonage' => $this->grossTonage,
            'year' => $this->year,
            'callsign' => $this->callsign,
            'LOA' => $this->loa,
            'breadth' => $this->breadth,
            'vessel_type_generic' => $this->vesselTypeGeneric,
            'vessel_type_detailed' => $this->vesselTypeDetailed,
        ];

        if(!is_null($this->picture)) {
            $arr['picture'] = $this->picture;
        }

        if(!is_null($this->year)) {
            $arr['year'] = $this->year;
        }

        return $arr;
    }
}
