<?php

namespace App\Models;

use App\Enums\JobType;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JobList extends Model
{
    use HasFactory;

    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'job_type' => JobType::class,
    ];


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'department_id',
        'ship_id',
        'typing_system_id',
        'component_name',
        'component_code',
        'part_name',
        'job_type',
        'job_name',
        'approved_job',
        'person_in_charge',
        'status',
        'level'
    ];
}
