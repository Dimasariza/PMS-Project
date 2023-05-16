<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Ship extends Model
{
    use HasFactory, SoftDeletes;

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

    public function jobLists(): HasMany
    {
        return $this->hasMany(JobList::class);
    }
}
