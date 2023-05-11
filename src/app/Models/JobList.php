<?php

namespace App\Models;

use App\Enums\JobType;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class JobList extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'job_type' => JobType::class,
        'approved_job' => 'boolean'
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
        'level',
    ];

    /**
     * One job belongs to one department
     *
     * @return Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function department(): BelongsTo
    {
        return $this->belongsTo(Department::class, 'department_id')->withTrashed();
    }

    /**
     * One job belongs to one ship
     *
     * @return Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function ship(): BelongsTo
    {
        return $this->belongsTo(Ship::class, 'ship_id')->withTrashed();
    }

    /**
     * One job belongs to one typing system
     *
     * @return Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function typingSystem(): BelongsTo
    {
        return $this->belongsTo(TypingSystem::class, 'typing_system_id')->withTrashed();
    }
}
