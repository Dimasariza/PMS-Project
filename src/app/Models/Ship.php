<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ship extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'imo_number',
        'vessel_name',
        'flag',
        'picture',
        'dwt',
        'gross_tonage',
        'year',
        'callsign',
        'LOA',
        'breadth',
        'vessel_type_generic',
        'vessel_type_detailed',
    ];
}